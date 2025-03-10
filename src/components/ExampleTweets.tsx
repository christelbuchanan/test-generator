import React from 'react'
import { MessageSquare } from 'lucide-react'

const ExampleTweets: React.FC = () => {
  const examples = [
    {
      topic: "Market Volatility",
      tweet: "Markets will fluctuate. That's the nature of markets. Focus on building. #BUIDL"
    },
    {
      topic: "New Listing",
      tweet: "We will list $XYZ in the Innovation Zone. Trading opens tomorrow at 8:00 UTC. Always DYOR before trading new tokens. 🔶"
    },
    {
      topic: "Security Reminder",
      tweet: "Security is the top priority. Enable 2FA, use a hardware wallet, and never share your private keys. Stay #SAFU."
    },
    {
      topic: "Industry Growth",
      tweet: "Crypto adoption continues to grow. More users, more builders, more innovation. The fundamentals are strong. 💪"
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-100 p-4">
        <h2 className="text-lg font-bold text-gray-800 flex items-center">
          <MessageSquare className="h-5 w-5 mr-2 text-yellow-500" />
          Example CZ-Style Tweets
        </h2>
      </div>
      
      <div className="p-4">
        <div className="space-y-4">
          {examples.map((example, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
              <p className="text-sm font-medium text-yellow-600 mb-1">
                Topic: {example.topic}
              </p>
              <p className="text-gray-800">{example.tweet}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExampleTweets
