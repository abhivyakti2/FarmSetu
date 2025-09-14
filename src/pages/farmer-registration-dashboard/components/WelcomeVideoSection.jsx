import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const WelcomeVideoSection = ({ onStartRegistration }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const successStories = [
    {
      id: 1,
      name: "Maria Rodriguez",
      farm: "Sunrise Organic Farm",
      location: "California, USA",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "AgriTrace helped me increase my income by 40% through direct consumer connections.",
      crops: "Tomatoes, Peppers, Herbs"
    },
    {
      id: 2,
      name: "James Thompson",
      farm: "Green Valley Produce",
      location: "Texas, USA",
      image: "https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Transparency brought trust back to farming. My customers know exactly what they\'re buying.",
      crops: "Corn, Soybeans, Wheat"
    },
    {
      id: 3,
      name: "Sarah Chen",
      farm: "Mountain Fresh Farms",
      location: "Oregon, USA",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "The platform made it easy to showcase our sustainable practices and connect with conscious consumers.",
      crops: "Berries, Apples, Leafy Greens"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Welcome to the AgriTrace Farmer Community
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join thousands of farmers who are building trust, increasing income, and connecting directly with consumers through blockchain transparency.
        </p>
      </div>
      {/* Video Player Section */}
      <div className="relative bg-black rounded-xl overflow-hidden mb-8 max-w-4xl mx-auto">
        <div className="aspect-video relative">
          {!isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
              <Image
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Farmer in field with crops"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative z-10 text-center text-white">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => setIsPlaying(true)}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 mb-4"
                  iconName="Play"
                  iconSize={32}
                >
                  Watch Success Stories
                </Button>
                <p className="text-sm opacity-90">3 minutes • Success stories from real farmers</p>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
              <div className="text-center text-primary">
                <Icon name="PlayCircle" size={64} className="mx-auto mb-4" />
                <p className="text-lg font-medium">Video Playing...</p>
                <p className="text-sm text-muted-foreground">Real farmer testimonials and success stories</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsPlaying(false)}
                  className="mt-4"
                  iconName="Pause"
                >
                  Pause
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Success Stories Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {successStories?.map((story) => (
          <div key={story?.id} className="bg-white rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src={story?.image}
                alt={story?.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-foreground">{story?.name}</h4>
                <p className="text-sm text-muted-foreground">{story?.farm}</p>
                <p className="text-xs text-muted-foreground">{story?.location}</p>
              </div>
            </div>
            <blockquote className="text-sm text-foreground mb-3 italic">
              "{story?.quote}"
            </blockquote>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Icon name="Sprout" size={14} />
              <span>Grows: {story?.crops}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Call to Action */}
      <div className="text-center">
        <Button
          variant="default"
          size="lg"
          onClick={onStartRegistration}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
          iconName="ArrowRight"
          iconPosition="right"
        >
          Start Your Registration Journey
        </Button>
        <p className="text-sm text-muted-foreground mt-3">
          Free to join • No setup fees • Start earning immediately
        </p>
      </div>
    </div>
  );
};

export default WelcomeVideoSection;