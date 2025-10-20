// Export the required types
export type SearchablePost = {
  title: string;
  excerpt: string;
  content: string;
  author: { name: string };
  category: string;
  publishedAt: string;
  readingTime: number;
};

export type HygraphCategory = {
  title: string;
  categoryColor?: { hex: string };
};