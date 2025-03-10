import React from 'react'
import { Send, RefreshCw } from 'lucide-react'

interface TweetFormProps {
  topic: string
  setTopic: (topic: string) => void
  tone: string
  setTone: (tone: string) => void
  length: string
  setLength: (length: string) => void
  onGenerate: () => void
  isGenerating: boolean
}

const TweetForm: React.FC<TweetFormProps> = ({
  topic,
  setTopic,
  tone,
  setTone,
  length,
  setLength,
  onGenerate,
  isGenerating
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Generate a Tweet</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
            Topic or Context
          </label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Bitcoin price, Binance updates, market trends"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        
        <div>
          <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-1">
            Tone
          </label>
          <select
            id="tone"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="informative">Informative</option>
            <option value="optimistic">Optimistic</option>
            <option value="cautious">Cautious</option>
            <option value="neutral">Neutral</option>
            <option value="announcement">Announcement</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">
            Tweet Length
          </label>
          <select
            id="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="short">Short (1-2 sentences)</option>
            <option value="medium">Medium (2-3 sentences)</option>
            <option value="long">Long (3-4 sentences)</option>
          </select>
        </div>
        
        <button
          onClick={onGenerate}
          disabled={isGenerating || !topic.trim()}
          className={`w-full flex items-center justify-center py-2 px-4 rounded-md text-white font-medium ${
            isGenerating || !topic.trim() 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-yellow-500 hover:bg-yellow-600'
          }`}
        >
          {isGenerating ? (
            <>
              <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              Generate Tweet
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default TweetForm
