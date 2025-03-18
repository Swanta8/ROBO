export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  details: {
    overview: string;
    features: string[];
    implementation: string;
    testimonial?: string;
  };
}