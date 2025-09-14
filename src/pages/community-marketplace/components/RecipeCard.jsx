import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecipeCard = ({ recipe, onViewRecipe }) => {
  return (
    <div className="bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="relative h-40 overflow-hidden">
        <Image
          src={recipe?.image}
          alt={recipe?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="px-2 py-1 bg-black bg-opacity-50 text-white text-xs rounded-full">
            {recipe?.cookTime}
          </span>
        </div>
        <div className="absolute bottom-2 left-2">
          <div className="flex items-center space-x-1">
            <Icon name="Star" size={12} className="text-accent fill-current" />
            <span className="text-xs text-white font-medium">{recipe?.rating}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-foreground mb-2 line-clamp-1">{recipe?.title}</h4>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{recipe?.description}</p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={12} />
            <span>{recipe?.cookTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={12} />
            <span>{recipe?.servings} servings</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="ChefHat" size={12} />
            <span>{recipe?.difficulty}</span>
          </div>
        </div>
        
        <div className="mb-3">
          <p className="text-xs text-muted-foreground mb-1">Featured Ingredients:</p>
          <div className="flex flex-wrap gap-1">
            {recipe?.ingredients?.slice(0, 3)?.map((ingredient, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs rounded-full"
              >
                {ingredient}
              </span>
            ))}
            {recipe?.ingredients?.length > 3 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                +{recipe?.ingredients?.length - 3}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <Image
                src={recipe?.chef?.avatar}
                alt={recipe?.chef?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-muted-foreground">by {recipe?.chef?.name}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewRecipe(recipe)}
          >
            <Icon name="Play" size={12} className="mr-1" />
            Watch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;