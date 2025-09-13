import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EducationalContent = () => {
  const [activeCategory, setActiveCategory] = useState('blockchain');
  const [expandedArticle, setExpandedArticle] = useState(null);

  const categories = {
    blockchain: {
      title: "Blockchain Basics for Agriculture",
      icon: "Link",
      articles: [
        {
          id: 1,
          title: "What is Blockchain in Simple Terms?",
          summary: "Understanding blockchain technology using agricultural metaphors and real-world examples.",
          content: `Think of blockchain as a digital ledger book that's shared among all farmers, distributors, and consumers. Unlike a traditional ledger that one person controls, this digital book is copied and stored by many people.\n\nWhen a farmer harvests tomatoes, they write this information in the digital book. Once written, this information cannot be erased or changed by anyone - not even the farmer who wrote it.\n\nEvery time the tomatoes move from farm to distributor to store, a new entry is added to the book. Everyone can see these entries, creating complete transparency about where the tomatoes came from and how they were handled.`,
          readTime: "3 min read",
          difficulty: "Beginner"
        },
        {
          id: 2,
          title: "How Does AgriTrace Use Blockchain?",
          summary: "Learn how our platform applies blockchain technology to create trust in the food supply chain.",
          content: `AgriTrace uses blockchain to create an unbreakable chain of trust from farm to table. Here's how it works:\n\n1. **Farm Registration**: When farmers join AgriTrace, their farm information is recorded on the blockchain with GPS coordinates and certification details.\n\n2. **Produce Tracking**: Each batch of produce gets a unique QR code linked to blockchain records containing harvest date, farming methods, and quality tests.\n\n3. **Supply Chain Events**: Every time produce changes hands - from farmer to distributor to retailer - this event is recorded on the blockchain with timestamps and location data.\n\n4. **Consumer Verification**: When you scan a QR code, you're accessing the complete blockchain history of that produce, ensuring authenticity and transparency.`,
          readTime: "5 min read",
          difficulty: "Intermediate"
        },
        {
          id: 3,
          title: "Benefits of Blockchain for Farmers",
          summary: "Discover how blockchain technology empowers farmers with better market access and fair pricing.",
          content: `Blockchain technology offers several key benefits for farmers:\n\n**Direct Market Access**: Farmers can connect directly with consumers, bypassing traditional middlemen and earning better prices for their produce.\n\n**Proof of Quality**: Blockchain records provide immutable proof of organic certification, sustainable practices, and quality standards, allowing farmers to command premium prices.\n\n**Faster Payments**: Smart contracts on the blockchain can automate payments, ensuring farmers receive compensation quickly and reliably.\n\n**Brand Building**: Farmers can build their personal brand and reputation through transparent blockchain records of their farming practices and produce quality.\n\n**Reduced Fraud**: Blockchain prevents counterfeit products from being sold under a farmer's name, protecting their reputation and income.`,
          readTime: "4 min read",
          difficulty: "Beginner"
        }
      ]
    },
    safety: {
      title: "Food Safety & Nutrition",
      icon: "Shield",
      articles: [
        {
          id: 4,
          title: "Understanding Food Safety Certifications",
          summary: "Learn about different food safety standards and what they mean for consumers.",
          content: `Food safety certifications are like report cards for farms and food producers. They tell you that independent experts have checked the farm and confirmed it meets high safety standards.\n\n**USDA Organic**: This certification means the farm uses no synthetic pesticides, herbicides, or fertilizers. Animals are raised without antibiotics or growth hormones.\n\n**Good Agricultural Practices (GAP)**: This certification focuses on food safety, worker safety, and environmental protection during farming.\n\n**HACCP (Hazard Analysis Critical Control Points)**: This system identifies potential food safety hazards and establishes controls to prevent them.\n\n**Fair Trade**: This certification ensures farmers receive fair prices and work in safe conditions while protecting the environment.`,
          readTime: "6 min read",
          difficulty: "Beginner"
        },
        {
          id: 5,
          title: "How to Read QR Code Information",
          summary: "A step-by-step guide to understanding the information revealed when you scan produce QR codes.",
          content: `When you scan a QR code on AgriTrace, you'll see several types of information:\n\n**Farm Information**: The name and location of the farm where your produce was grown, along with the farmer's story and farming practices.\n\n**Harvest Details**: The exact date your produce was harvested and any quality tests performed.\n\n**Journey Timeline**: A complete timeline showing how your produce traveled from farm to your local store.\n\n**Certifications**: Any organic, fair trade, or safety certifications the farm holds, with verification from official bodies.\n\n**Nutritional Information**: Details about the nutritional content and any special growing conditions that might affect taste or quality.\n\n**Contact Information**: Ways to connect directly with the farmer or ask questions about their growing practices.`,
          readTime: "4 min read",
          difficulty: "Beginner"
        }
      ]
    },
    sustainability: {
      title: "Sustainable Farming Practices",
      icon: "Leaf",
      articles: [
        {
          id: 6,
          title: "What Makes Farming Sustainable?",
          summary: "Explore the principles of sustainable agriculture and their environmental benefits.",
          content: `Sustainable farming is like being a good neighbor to the environment. It means growing food in ways that protect the soil, water, and air for future generations.\n\n**Soil Health**: Sustainable farmers use techniques like crop rotation and cover crops to keep soil healthy and fertile without relying heavily on chemical fertilizers.\n\n**Water Conservation**: These farmers use efficient irrigation systems and choose drought-resistant crops to minimize water usage.\n\n**Biodiversity**: Sustainable farms often grow multiple types of crops and provide habitats for beneficial insects and wildlife.\n\n**Reduced Chemical Use**: By using natural pest control methods and organic fertilizers, sustainable farmers minimize their environmental impact.\n\n**Carbon Sequestration**: Many sustainable farming practices actually remove carbon dioxide from the atmosphere, helping fight climate change.`,
          readTime: "5 min read",
          difficulty: "Intermediate"
        },
        {
          id: 7,
          title: "The Impact of Your Food Choices",
          summary: "Learn how choosing transparently-sourced food supports sustainable agriculture and local communities.",
          content: `Every time you choose food with transparent sourcing, you're voting for a better food system:\n\n**Supporting Small Farmers**: When you buy directly from farmers through transparent supply chains, more of your money goes directly to the people growing your food.\n\n**Environmental Protection**: Choosing sustainably-grown produce encourages farming practices that protect soil, water, and wildlife.\n\n**Reducing Food Waste**: Transparent supply chains often mean shorter distances from farm to table, reducing spoilage and waste.\n\n**Building Community**: When you know where your food comes from, you're connecting with the people and places that feed you.\n\n**Encouraging Innovation**: Your support helps farmers invest in new sustainable technologies and practices.\n\n**Food Security**: Supporting diverse, local food systems makes our communities more resilient to supply chain disruptions.`,
          readTime: "4 min read",
          difficulty: "Beginner"
        }
      ]
    }
  };

  const toggleArticle = (articleId) => {
    setExpandedArticle(expandedArticle === articleId ? null : articleId);
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Educational Resources</h3>
        <p className="text-muted-foreground">Learn about blockchain, food safety, and sustainable agriculture</p>
      </div>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(categories)?.map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeCategory === key
                ? 'bg-primary text-primary-foreground shadow-organic'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span>{category?.title}</span>
          </button>
        ))}
      </div>
      {/* Articles */}
      <div className="space-y-4">
        {categories?.[activeCategory]?.articles?.map((article) => (
          <div key={article?.id} className="bg-background rounded-lg border border-border overflow-hidden">
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-2">{article?.title}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{article?.summary}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>{article?.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="BarChart3" size={12} />
                      <span>{article?.difficulty}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleArticle(article?.id)}
                  className="ml-4"
                >
                  <Icon 
                    name={expandedArticle === article?.id ? "ChevronUp" : "ChevronDown"} 
                    size={16} 
                  />
                </Button>
              </div>

              {expandedArticle === article?.id && (
                <div className="pt-4 border-t border-border">
                  <div className="prose prose-sm max-w-none">
                    {article?.content?.split('\n\n')?.map((paragraph, index) => (
                      <p key={index} className="text-sm text-foreground mb-3 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                    <div className="flex items-center space-x-4">
                      <Button variant="outline" size="sm">
                        <Icon name="Share2" size={14} className="mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Bookmark" size={14} className="mr-2" />
                        Save
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => toggleArticle(article?.id)}>
                      <Icon name="ChevronUp" size={16} className="mr-2" />
                      Collapse
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Additional Resources */}
      <div className="mt-8 pt-6 border-t border-border">
        <h4 className="text-lg font-semibold text-foreground mb-4">Additional Resources</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-background rounded-lg border border-border p-4 text-center">
            <Icon name="Video" size={32} className="text-primary mx-auto mb-3" />
            <h5 className="font-medium text-foreground mb-2">Video Tutorials</h5>
            <p className="text-sm text-muted-foreground mb-3">Watch step-by-step guides on using AgriTrace</p>
            <Button variant="outline" size="sm" fullWidth>
              Watch Videos
            </Button>
          </div>
          
          <div className="bg-background rounded-lg border border-border p-4 text-center">
            <Icon name="FileText" size={32} className="text-primary mx-auto mb-3" />
            <h5 className="font-medium text-foreground mb-2">Downloadable Guides</h5>
            <p className="text-sm text-muted-foreground mb-3">PDF guides for farmers and consumers</p>
            <Button variant="outline" size="sm" fullWidth>
              Download PDFs
            </Button>
          </div>
          
          <div className="bg-background rounded-lg border border-border p-4 text-center">
            <Icon name="MessageCircle" size={32} className="text-primary mx-auto mb-3" />
            <h5 className="font-medium text-foreground mb-2">Community Forum</h5>
            <p className="text-sm text-muted-foreground mb-3">Connect with other users and experts</p>
            <Button variant="outline" size="sm" fullWidth>
              Join Discussion
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalContent;