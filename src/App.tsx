import React, { useState } from 'react'
import { Twitter, Send, RefreshCw, Copy, ThumbsUp } from 'lucide-react'
import Header from './components/Header'
import TweetForm from './components/TweetForm'
import TweetDisplay from './components/TweetDisplay'
import ExampleTweets from './components/ExampleTweets'
import { generateTweet } from './utils/tweetGenerator'

function App() {
  const [generatedTweet, setGeneratedTweet] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [topic, setTopic] = useState('')
  const [tone, setTone] = useState('informative')
  const [length, setLength] = useState('medium')

  const handleGenerateTweet = () => {
    setIsGenerating(true)
    setTimeout(() => {
      const tweet = generateTweet(topic, tone, length)
      setGeneratedTweet(tweet)
      setIsGenerating(false)
    }, 1000)
  }

  const handleCopyTweet = () => {
    navigator.clipboard.writeText(generatedTweet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 order-2 md:order-1">
            <TweetForm 
              topic={topic}
              setTopic={setTopic}
              tone={tone}
              setTone={setTone}
              length={length}
              setLength={setLength}
              onGenerate={handleGenerateTweet}
              isGenerating={isGenerating}
            />
            
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Why CZ's Style?</h3>
              <p className="text-gray-700 mb-3">
                @cz_binance (Changpeng Zhao) is known for his:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Direct and concise communication</li>
                <li>Balanced optimism about crypto</li>
                <li>Simple language that avoids jargon</li>
                <li>Thoughtful responses to market events</li>
                <li>Occasional use of emojis and hashtags</li>
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-2 order-1 md:order-2">
            <TweetDisplay 
              tweet={generatedTweet} 
              isGenerating={isGenerating}
              onCopy={handleCopyTweet}
              copied={copied}
            />
            
            <ExampleTweets />
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>This is a demo application and is not affiliated with Binance or CZ.</p>
          <p className="text-sm mt-2 text-gray-400">
            Created for educational and entertainment purposes only.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
