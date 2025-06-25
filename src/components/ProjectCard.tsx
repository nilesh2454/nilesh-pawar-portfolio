import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { GithubIcon, ExternalLink } from 'lucide-react';

export type Project = {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="card-gradient rounded-xl overflow-hidden shadow-md card-hover w-full max-w-sm mx-auto sm:max-w-none">
        <div 
          className="h-40 sm:h-48 bg-muted flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="text-lg sm:text-2xl font-bold gradient-text text-center px-4">{project.title}</div>
          )}
        </div>
        <div className="p-4 sm:p-5">
          <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base line-clamp-2">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-secondary text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2 sm:gap-3">
            <div className="flex flex-row gap-2 w-full min-w-0">
              {project.githubUrl && (
                <Button asChild className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 flex-1 min-w-0 text-xs sm:text-sm">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
                    <GithubIcon size={14} />
                    <span>View Code</span>
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4 flex-1 min-w-0 text-xs sm:text-sm">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                </Button>
              )}
            </div>
            <Button variant="outline" onClick={() => setIsOpen(true)} className="w-full text-xs sm:text-sm">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-2xl max-w-[95vw] max-h-[90vh] overflow-y-auto m-4">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl">{project.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {project.image && (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 sm:h-64 object-cover rounded-md mb-4" 
              />
            )}
            <DialogDescription className="text-sm sm:text-base">
              {project.fullDescription}
            </DialogDescription>
            <div className="flex flex-wrap gap-1 sm:gap-2 my-4">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-secondary text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-row gap-2 w-full min-w-0">
              {project.githubUrl && (
                <Button asChild className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 flex-1 min-w-0 text-xs sm:text-sm">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
                    <GithubIcon size={16} />
                    <span className="text-sm">View Code</span>
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4 flex-1 min-w-0 text-xs sm:text-sm">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
