import React from 'react'
import { Twitter, Copy, Check, RefreshCw } from 'lucide-react'

interface TweetDisplayProps {
  tweet: string
  isGenerating: boolean
  onCopy: () => void
  copied: boolean
}

const TweetDisplay: React.FC<TweetDisplayProps> = ({ 
  tweet, 
  isGenerating,
  onCopy,
  copied
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <div className="bg-blue-500 p-4 flex items-center">
        <Twitter className="h-6 w-6 text-white mr-2" />
        <h2 className="text-xl font-bold text-white">Generated Tweet</h2>
      </div>
      
      <div className="p-6">
        {isGenerating ? (
          <div className="flex flex-col items-center justify-center py-8">
            <RefreshCw className="h-8 w-8 text-blue-500 animate-spin mb-4" />
            <p className="text-gray-600">Generating your CZ-style tweet...</p>
          </div>
        ) : tweet ? (
          <div>
            <div className="flex items-start mb-4">
              <img 
                src="https://images.unsplash.com/photo-1622020457014-aed1cc44f25e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                alt="CZ Profile" 
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <div className="flex items-center">
                  <span className="font-bold text-gray-900">CZ 🔶 Binance</span>
                  <span className="text-gray-500 ml-2 text-sm">@cz_binance</span>
                </div>
                <p className="mt-1 text-gray-800 whitespace-pre-line">{tweet}</p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={onCopy}
                className="flex items-center text-sm text-gray-600 hover:text-blue-500 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy tweet
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>Your generated tweet will appear here</p>
            <p className="text-sm mt-2">Enter a topic and click "Generate Tweet"</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TweetDisplay
