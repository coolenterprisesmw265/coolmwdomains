"use client"

import { useState, useMemo, useCallback, useEffect } from "react"
import { getAllPosts, getCategories, getAllPostsForSearch } from "../lib/hygraph"
import { transformHygraphPosts } from "../lib/transform-data"
import type { SearchablePost, HygraphCategory } from "../types/blog"

export function useHygraphSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "popular">("newest")
  const [posts, setPosts] = useState<SearchablePost[]>([])
  const [allPosts, setAllPosts] = useState<SearchablePost[]>([]) // Cache all posts for client-side search
  const [categories, setCategories] = useState<Array<{ name: string; count: number; color: string }>>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Load initial data
  useEffect(() => {
    loadInitialData()
  }, [])

  const loadInitialData = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Load posts and categories in parallel
      const [postsData, categoriesData, allPostsData] = await Promise.all([
        getAllPosts(50, 0),
        getCategories(),
        getAllPostsForSearch(), // Get all posts for search functionality
      ])

      const transformedPosts = transformHygraphPosts(postsData.posts)
      const transformedAllPosts = transformHygraphPosts(allPostsData)

      setPosts(transformedPosts)
      setAllPosts(transformedAllPosts) // Cache for search

      // Count posts per category
      const categoryCounts: Record<string, number> = {}
      transformedAllPosts.forEach((post) => {
        const category = post.category
        categoryCounts[category] = (categoryCounts[category] || 0) + 1
      })

      // Transform categories with counts
      const categoriesWithCounts = [
        { name: "All", count: transformedAllPosts.length, color: "#6B7280" },
        ...categoriesData.map((cat: HygraphCategory) => ({
          name: cat.title,
          count: categoryCounts[cat.title] || 0,
          color: cat.categoryColor?.hex || "#3B82F6",
        })),
      ]
      setCategories(categoriesWithCounts)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to load blog data. Please try again."
      setError(errorMessage)
      console.error("Error loading initial data:", err)
    } finally {
      setIsLoading(false)
    }
  }

  // Search posts when query changes
  useEffect(() => {
    if (searchQuery.trim()) {
      performSearch()
    } else if (selectedCategory !== "All") {
      filterByCategory()
    } else {
      // Reset to initial posts
      setPosts(allPosts.slice(0, 50))
    }
  }, [searchQuery, selectedCategory, allPosts])

  const performSearch = async () => {
    if (!searchQuery.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      // Use client-side search for better content search
      const searchLower = searchQuery.toLowerCase().trim()
      const filteredPosts = allPosts.filter((post) => {
        return (
          post.title?.toLowerCase().includes(searchLower) ||
          post.excerpt?.toLowerCase().includes(searchLower) ||
          post.content?.toLowerCase().includes(searchLower) ||
          post.author?.name?.toLowerCase().includes(searchLower) ||
          post.category?.toLowerCase().includes(searchLower)
        )
      })

      setPosts(filteredPosts)
    } catch (err) {
      setError("Search failed. Please try again.")
      console.error("Error searching posts:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const filterByCategory = async () => {
    if (selectedCategory === "All") {
      setPosts(allPosts.slice(0, 50))
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // Use client-side filtering for better performance
      const filteredPosts = allPosts.filter((post) => post.category === selectedCategory)
      setPosts(filteredPosts)
    } catch (err) {
      setError("Failed to filter posts. Please try again.")
      console.error("Error filtering by category:", err)
    } finally {
      setIsLoading(false)
    }
  }

  // Sort posts locally
  const sortedPosts = useMemo(() => {
    const sorted = [...posts]

    sorted.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        case "oldest":
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
        case "popular":
          // Sort by readingTime as a proxy for popularity since we don't have views
          return b.readingTime - a.readingTime
        default:
          return 0
      }
    })

    return sorted
  }, [posts, sortBy])

  const clearSearch = useCallback(() => {
    setSearchQuery("")
    setSelectedCategory("All")
    setSortBy("newest")
    setPosts(allPosts.slice(0, 50))
  }, [allPosts])

  const refreshData = useCallback(() => {
    loadInitialData()
  }, [])

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    categories,
    filteredPosts: sortedPosts,
    isLoading,
    error,
    clearSearch,
    refreshData,
    hasActiveFilters: searchQuery.trim() !== "" || selectedCategory !== "All" || sortBy !== "newest",
  }
}
