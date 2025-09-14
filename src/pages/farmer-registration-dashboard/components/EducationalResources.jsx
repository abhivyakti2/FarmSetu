import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const EducationalResources = () => {
  const [selectedCategory, setSelectedCategory] = useState('best-practices');
  const [selectedResource, setSelectedResource] = useState(null);

  const categories = [
    { id: 'best-practices', label: 'Best Practices', icon: 'BookOpen' },
    { id: 'seasonal-guides', label: 'Seasonal Guides', icon: 'Calendar' },
    { id: 'blockchain-basics', label: 'Blockchain Basics', icon: 'Link' },
    { id: 'marketing-tips', label: 'Marketing Tips', icon: 'TrendingUp' }
  ];

  const resources = {
    'best-practices': [
      {
        id: 1,
        title: 'Organic Farming Fundamentals',
        type: 'video',
        duration: '12 min',
        thumbnail: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Learn the basics of organic farming practices that consumers value most.',
        topics: ['Soil Health', 'Natural Pest Control', 'Crop Rotation'],
        difficulty: 'Beginner'
      },
      {
        id: 2,
        title: 'Quality Control & Food Safety',
        type: 'article',
        readTime: '8 min',
        thumbnail: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Essential food safety practices to maintain quality from harvest to consumer.',
        topics: ['Harvest Timing', 'Storage Methods', 'Contamination Prevention'],
        difficulty: 'Intermediate'
      },
      {
        id: 3,
        title: 'Sustainable Water Management',
        type: 'guide',
        readTime: '15 min',
        thumbnail: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Efficient irrigation techniques that reduce costs and environmental impact.',
        topics: ['Drip Irrigation', 'Water Conservation', 'Soil Moisture'],
        difficulty: 'Advanced'
      }
    ],
    'seasonal-guides': [
      {
        id: 4,
        title: 'Spring Planting Calendar',
        type: 'guide',
        readTime: '10 min',
        thumbnail: 'https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Optimal planting times for spring crops in different climate zones.',
        topics: ['Planting Dates', 'Soil Preparation', 'Seed Selection'],
        difficulty: 'Beginner'
      },
      {
        id: 5,
        title: 'Summer Crop Management',
        type: 'video',
        duration: '18 min',
        thumbnail: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Managing crops during hot summer months for optimal yield.',
        topics: ['Heat Stress', 'Irrigation Scheduling', 'Pest Management'],
        difficulty: 'Intermediate'
      },
      {
        id: 6,
        title: 'Fall Harvest Optimization',
        type: 'article',
        readTime: '12 min',
        thumbnail: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Maximizing harvest quality and timing for fall crops.',
        topics: ['Harvest Indicators', 'Post-Harvest Handling', 'Storage'],
        difficulty: 'Advanced'
      }
    ],
    'blockchain-basics': [
      {
        id: 7,
        title: 'What is Blockchain?',
        type: 'video',
        duration: '8 min',
        thumbnail: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Simple explanation of blockchain technology and how it benefits farmers.',
        topics: ['Transparency', 'Immutable Records', 'Trust Building'],
        difficulty: 'Beginner'
      },
      {
        id: 8,
        title: 'How AgriTrace Uses Blockchain',
        type: 'article',
        readTime: '6 min',
        thumbnail: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Understanding how your farm data is secured and shared transparently.',
        topics: ['Data Security', 'Supply Chain Tracking', 'Consumer Trust'],
        difficulty: 'Beginner'
      },
      {
        id: 9,
        title: 'Benefits of Transparency',
        type: 'guide',
        readTime: '10 min',
        thumbnail: 'https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'How transparency increases product value and consumer loyalty.',
        topics: ['Premium Pricing', 'Brand Building', 'Consumer Relations'],
        difficulty: 'Intermediate'
      }
    ],
    'marketing-tips': [
      {
        id: 10,
        title: 'Telling Your Farm Story',
        type: 'video',
        duration: '14 min',
        thumbnail: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Creating compelling narratives that connect with consumers.',
        topics: ['Storytelling', 'Photography', 'Social Media'],
        difficulty: 'Beginner'
      },
      {
        id: 11,
        title: 'Direct-to-Consumer Sales',
        type: 'article',
        readTime: '12 min',
        thumbnail: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Strategies for selling directly to consumers and building relationships.',
        topics: ['Farmers Markets', 'Online Sales', 'Customer Retention'],
        difficulty: 'Intermediate'
      },
      {
        id: 12,
        title: 'Building Brand Trust',
        type: 'guide',
        readTime: '16 min',
        thumbnail: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Using transparency and quality to build a trusted farm brand.',
        topics: ['Brand Identity', 'Quality Assurance', 'Customer Communication'],
        difficulty: 'Advanced'
      }
    ]
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-success bg-success/10';
      case 'Intermediate': return 'text-warning bg-warning/10';
      case 'Advanced': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return 'Play';
      case 'article': return 'FileText';
      case 'guide': return 'BookOpen';
      default: return 'File';
    }
  };

  const ResourceModal = ({ resource, onClose }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <Image
            src={resource?.thumbnail}
            alt={resource?.title}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/20 text-white hover:bg-black/40"
          >
            <Icon name="X" size={20} />
          </Button>
          <div className="absolute bottom-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(resource?.difficulty)}`}>
              {resource?.difficulty}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Icon name={getTypeIcon(resource?.type)} size={20} className="text-primary" />
            <span className="text-sm text-muted-foreground">
              {resource?.type === 'video' ? resource?.duration : resource?.readTime} read
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-4">{resource?.title}</h3>
          <p className="text-muted-foreground mb-6">{resource?.description}</p>
          
          <div className="mb-6">
            <h4 className="font-semibold text-foreground mb-3">Topics Covered:</h4>
            <div className="flex flex-wrap gap-2">
              {resource?.topics?.map((topic, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="default" className="bg-primary hover:bg-primary/90" iconName="Play">
              {resource?.type === 'video' ? 'Watch Now' : 'Read Now'}
            </Button>
            <Button variant="outline" iconName="Bookmark">
              Save for Later
            </Button>
            <Button variant="outline" iconName="Share">
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Educational Resources</h2>
            <p className="text-muted-foreground">
              Learn best practices, seasonal guides, and blockchain basics to grow your farm business
            </p>
          </div>
          <Icon name="GraduationCap" size={64} className="text-accent/30" />
        </div>
      </div>
      {/* Category Tabs */}
      <div className="bg-white rounded-lg border border-border p-1">
        <div className="flex space-x-1 overflow-x-auto">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                selectedCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources?.[selectedCategory]?.map((resource) => (
          <div
            key={resource?.id}
            className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all cursor-pointer"
            onClick={() => setSelectedResource(resource)}
          >
            <div className="relative">
              <Image
                src={resource?.thumbnail}
                alt={resource?.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3">
                <div className="flex items-center space-x-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                  <Icon name={getTypeIcon(resource?.type)} size={12} />
                  <span>{resource?.type === 'video' ? resource?.duration : resource?.readTime}</span>
                </div>
              </div>
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource?.difficulty)}`}>
                  {resource?.difficulty}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{resource?.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{resource?.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {resource?.topics?.slice(0, 2)?.map((topic, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                  >
                    {topic}
                  </span>
                ))}
                {resource?.topics?.length > 2 && (
                  <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                    +{resource?.topics?.length - 2} more
                  </span>
                )}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName={getTypeIcon(resource?.type)}
              >
                {resource?.type === 'video' ? 'Watch' : 'Read'}
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* Featured Resource */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Featured This Week</h3>
            <p className="text-muted-foreground">
              Essential knowledge for successful transparent farming
            </p>
          </div>
          <Icon name="Star" size={32} className="text-accent" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-3">
              Building Consumer Trust Through Transparency
            </h4>
            <p className="text-muted-foreground mb-4">
              Learn how transparent farming practices can increase your product value by up to 40% 
              and build lasting relationships with conscious consumers.
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="default" className="bg-primary hover:bg-primary/90" iconName="Play">
                Watch Now
              </Button>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Clock" size={16} />
                <span>22 minutes</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Featured resource"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                <Icon name="Play" size={24} className="text-primary ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Resource Modal */}
      {selectedResource && (
        <ResourceModal
          resource={selectedResource}
          onClose={() => setSelectedResource(null)}
        />
      )}
    </div>
  );
};

export default EducationalResources;