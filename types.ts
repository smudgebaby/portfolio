
export interface Photo {
  id: string;
  url: string;
  title: string;
  category: string;
  description?: string;
  location: string;
  year: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverImage: string;
}

export interface CuratorInsight {
  theme: string;
  insight: string;
}
