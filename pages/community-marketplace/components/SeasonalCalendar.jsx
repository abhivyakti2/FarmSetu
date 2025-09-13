import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SeasonalCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date()?.getMonth());
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const seasonalProduce = {
    0: ['Citrus Fruits', 'Root Vegetables', 'Winter Squash', 'Kale', 'Brussels Sprouts'],
    1: ['Citrus Fruits', 'Root Vegetables', 'Winter Greens', 'Broccoli', 'Cauliflower'],
    2: ['Spring Greens', 'Asparagus', 'Peas', 'Radishes', 'Lettuce'],
    3: ['Spring Onions', 'Artichokes', 'Strawberries', 'Spinach', 'Arugula'],
    4: ['Strawberries', 'Spring Peas', 'New Potatoes', 'Herbs', 'Early Tomatoes'],
    5: ['Berries', 'Stone Fruits', 'Summer Squash', 'Cucumbers', 'Peppers'],
    6: ['Tomatoes', 'Corn', 'Berries', 'Melons', 'Summer Herbs'],
    7: ['Peak Tomatoes', 'Peaches', 'Corn', 'Eggplant', 'Okra'],
    8: ['Apples', 'Pears', 'Fall Squash', 'Sweet Potatoes', 'Pumpkins'],
    9: ['Apples', 'Cranberries', 'Winter Squash', 'Root Vegetables', 'Cabbage'],
    10: ['Citrus Returns', 'Winter Greens', 'Persimmons', 'Pomegranates', 'Turnips'],
    11: ['Winter Citrus', 'Holiday Herbs', 'Storage Crops', 'Winter Squash', 'Evergreens']
  };
  
  const currentProduce = seasonalProduce?.[selectedMonth] || [];
  
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Seasonal Availability</h3>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSelectedMonth(selectedMonth > 0 ? selectedMonth - 1 : 11)}
          >
            <Icon name="ChevronLeft" size={16} />
          </Button>
          <span className="text-sm font-medium min-w-[100px] text-center">
            {months?.[selectedMonth]}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSelectedMonth(selectedMonth < 11 ? selectedMonth + 1 : 0)}
          >
            <Icon name="ChevronRight" size={16} />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {currentProduce?.map((produce, index) => (
          <div
            key={index}
            className="bg-muted rounded-lg p-3 text-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 bg-accent rounded-full mx-auto mb-2 flex items-center justify-center">
              <Icon name="Leaf" size={16} className="text-accent-foreground" />
            </div>
            <p className="text-xs font-medium">{produce}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-muted rounded-lg">
        <div className="flex items-start space-x-2">
          <Icon name="Info" size={16} className="text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground">Peak Season</p>
            <p className="text-xs text-muted-foreground">
              These items are at their freshest and most affordable during {months?.[selectedMonth]}.
              Connect with local farmers for the best quality and prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalCalendar;