import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import FarmerCard from './components/FarmerCard';
import SeasonalCalendar from './components/SeasonalCalendar';
import RecipeCard from './components/RecipeCard';
import SustainabilityTracker from './components/SustainabilityTracker';
import EventCard from './components/EventCard';
import MessageModal from './components/MessageModal';

const CommunityMarketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('distance');
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('farmers');

  // Mock data for farmers
  const farmers = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Green Valley Farm, CA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=200&fit=crop",
      rating: 4.9,
      reviewCount: 127,
      description: "Organic vegetables and herbs grown with sustainable practices. Third-generation farmer passionate about soil health and biodiversity.",
      specialties: ["Organic Vegetables", "Herbs", "Microgreens", "Seasonal Fruits"],
      distance: 2.3,
      deliveryDays: "Tue, Fri",
      isOnline: true,
      responseTime: "1-2 hours"
    },
    {
      id: 2,
      name: "Miguel Rodriguez",
      location: "Sunshine Orchards, CA",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=200&fit=crop",
      rating: 4.8,
      reviewCount: 89,
      description: "Citrus specialist with over 20 years of experience. Known for the sweetest oranges and grapefruits in the region.",
      specialties: ["Citrus Fruits", "Stone Fruits", "Avocados", "Nuts"],
      distance: 5.7,
      deliveryDays: "Wed, Sat",
      isOnline: false,
      responseTime: "3-5 hours"
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "Heritage Dairy Farm, CA",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=200&fit=crop",
      rating: 4.7,
      reviewCount: 156,
      description: "Artisan dairy products from grass-fed cows. Specializing in aged cheeses and fresh milk products.",
      specialties: ["Dairy Products", "Artisan Cheese", "Fresh Milk", "Yogurt"],
      distance: 8.2,
      deliveryDays: "Mon, Thu",
      isOnline: true,
      responseTime: "2-4 hours"
    }
  ];

  // Mock data for recipes
  const recipes = [
    {
      id: 1,
      title: "Farm Fresh Vegetable Stir Fry",
      description: "Quick and healthy stir fry using seasonal vegetables from local farms",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
      cookTime: "15 min",
      servings: 4,
      difficulty: "Easy",
      rating: 4.6,
      ingredients: ["Bell Peppers", "Broccoli", "Carrots", "Snow Peas", "Garlic"],
      chef: {
        name: "Chef Maria",
        avatar: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=50&h=50&fit=crop&crop=face"
      }
    },
    {
      id: 2,
      title: "Seasonal Fruit Salad Bowl",
      description: "Colorful mix of fresh seasonal fruits with honey lime dressing",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop",
      cookTime: "10 min",
      servings: 6,
      difficulty: "Easy",
      rating: 4.8,
      ingredients: ["Strawberries", "Blueberries", "Peaches", "Mint", "Honey"],
      chef: {
        name: "Chef David",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
      }
    }
  ];

  // Mock data for events
  const events = [
    {
      id: 1,
      title: "Saturday Farmers Market",
      description: "Weekly farmers market featuring 20+ local vendors with fresh produce, artisan goods, and live music",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=300&h=150&fit=crop",
      date: "2025-01-18",
      startTime: "08:00",
      endTime: "14:00",
      location: "Downtown Community Center, Main St",
      type: "Market",
      attendees: 245,
      maxAttendees: 300,
      isJoined: false,
      organizer: {
        name: "Community Market Org",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
      }
    },
    {
      id: 2,
      title: "Green Valley Farm Tour",
      description: "Guided tour of organic farming practices, meet the animals, and harvest your own vegetables",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300&h=150&fit=crop",
      date: "2025-01-20",
      startTime: "10:00",
      endTime: "15:00",
      location: "Green Valley Farm, 123 Farm Road",
      type: "Farm Visit",
      attendees: 12,
      maxAttendees: 20,
      isJoined: true,
      organizer: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
      }
    }
  ];

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'vegetables', label: 'Vegetables' },
    { value: 'fruits', label: 'Fruits' },
    { value: 'dairy', label: 'Dairy' },
    { value: 'herbs', label: 'Herbs' },
    { value: 'grains', label: 'Grains' }
  ];

  const sortOptions = [
    { value: 'distance', label: 'Nearest First' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest Members' },
    { value: 'alphabetical', label: 'A-Z' }
  ];

  const handleViewProfile = (farmer) => {
    // Handle farmer profile view
    console.log('View profile:', farmer);
  };

  const handleMessage = (farmer) => {
    setSelectedFarmer(farmer);
    setIsMessageModalOpen(true);
  };

  const handleSendMessage = (farmer, message) => {
    // Handle sending message
    console.log('Send message to:', farmer?.name, 'Message:', message);
  };

  const handleViewRecipe = (recipe) => {
    // Handle recipe view
    console.log('View recipe:', recipe);
  };

  const handleJoinEvent = (event) => {
    // Handle event join
    console.log('Join event:', event);
  };

  const filteredFarmers = farmers?.filter(farmer => {
    const matchesSearch = farmer?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                         farmer?.specialties?.some(specialty => 
                           specialty?.toLowerCase()?.includes(searchQuery?.toLowerCase())
                         );
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Community Marketplace
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect directly with local farmers, discover seasonal recipes, and join community events. 
            Build relationships that nourish both your family and your community.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <Input
                type="search"
                placeholder="Search farmers, produce, or specialties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e?.target?.value)}
                className="w-full"
              />
            </div>
            <Select
              options={categoryOptions}
              value={selectedCategory}
              onChange={setSelectedCategory}
              placeholder="Category"
              className="md:w-48"
            />
            <Select
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
              placeholder="Sort by"
              className="md:w-48"
            />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-border">
          {[
            { id: 'farmers', label: 'Local Farmers', icon: 'Users' },
            { id: 'recipes', label: 'Seasonal Recipes', icon: 'ChefHat' },
            { id: 'events', label: 'Community Events', icon: 'Calendar' },
            { id: 'impact', label: 'Our Impact', icon: 'Leaf' }
          ]?.map((tab) => (
            <Button
              key={tab?.id}
              variant={activeTab === tab?.id ? 'default' : 'ghost'}
              onClick={() => setActiveTab(tab?.id)}
              className="flex items-center space-x-2"
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </Button>
          ))}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'farmers' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-foreground">
                  Featured Farmers ({filteredFarmers?.length})
                </h2>
                <Button variant="outline" size="sm">
                  <Icon name="Map" size={16} className="mr-2" />
                  Map View
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredFarmers?.map((farmer) => (
                  <FarmerCard
                    key={farmer?.id}
                    farmer={farmer}
                    onViewProfile={handleViewProfile}
                    onMessage={handleMessage}
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <SeasonalCalendar />
              
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Filters</h3>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" fullWidth className="justify-start">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    Within 5 miles
                  </Button>
                  <Button variant="outline" size="sm" fullWidth className="justify-start">
                    <Icon name="Truck" size={16} className="mr-2" />
                    Offers delivery
                  </Button>
                  <Button variant="outline" size="sm" fullWidth className="justify-start">
                    <Icon name="Award" size={16} className="mr-2" />
                    Certified organic
                  </Button>
                  <Button variant="outline" size="sm" fullWidth className="justify-start">
                    <Icon name="Clock" size={16} className="mr-2" />
                    Available today
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'recipes' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-foreground">
                  Seasonal Recipes
                </h2>
                <Button variant="outline" size="sm">
                  <Icon name="Filter" size={16} className="mr-2" />
                  Filter by Ingredient
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {recipes?.map((recipe) => (
                  <RecipeCard
                    key={recipe?.id}
                    recipe={recipe}
                    onViewRecipe={handleViewRecipe}
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <SeasonalCalendar />
              
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Recipe Categories</h3>
                <div className="space-y-2">
                  {['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Desserts', 'Beverages']?.map((category) => (
                    <Button key={category} variant="ghost" size="sm" fullWidth className="justify-start">
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-foreground">
                  Upcoming Events
                </h2>
                <Button variant="outline" size="sm">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Create Event
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events?.map((event) => (
                  <EventCard
                    key={event?.id}
                    event={event}
                    onJoinEvent={handleJoinEvent}
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Event Types</h3>
                <div className="space-y-2">
                  {['Farmers Markets', 'Farm Tours', 'Workshops', 'Festivals', 'Tastings']?.map((type) => (
                    <Button key={type} variant="ghost" size="sm" fullWidth className="justify-start">
                      {type}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">My Events</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="Calendar" size={14} className="text-primary" />
                    <span>2 events joined</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="Clock" size={14} className="text-warning" />
                    <span>1 upcoming</span>
                  </div>
                  <Button variant="outline" size="sm" fullWidth>
                    View My Calendar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'impact' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SustainabilityTracker />
            
            <div className="space-y-6">
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Community Stories</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      "Thanks to AgriTrace, I've connected with amazing local farmers and my family 
                      now eats fresher, healthier food while supporting our community."
                    </p>
                    <p className="text-xs font-medium text-foreground">- Jennifer M., Local Customer</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      "The direct connection with customers has transformed my business. 
                      I can share my story and get fair prices for my organic produce."
                    </p>
                    <p className="text-xs font-medium text-foreground">- Carlos R., Organic Farmer</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Get Involved</h3>
                <div className="space-y-3">
                  <Button variant="outline" fullWidth className="justify-start">
                    <Icon name="Users" size={16} className="mr-2" />
                    Join Community Forum
                  </Button>
                  <Button variant="outline" fullWidth className="justify-start">
                    <Icon name="Share2" size={16} className="mr-2" />
                    Share Your Story
                  </Button>
                  <Button variant="outline" fullWidth className="justify-start">
                    <Icon name="Heart" size={16} className="mr-2" />
                    Volunteer at Events
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      {/* Message Modal */}
      <MessageModal
        farmer={selectedFarmer}
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default CommunityMarketplace;