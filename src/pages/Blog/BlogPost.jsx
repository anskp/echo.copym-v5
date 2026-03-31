import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import AuthorBox from '../../components/Blog/AuthorBox';
import TableOfContents from '../../components/Blog/TableOfContents';
import FAQAccordion from '../../components/Blog/FAQAccordion';
import QuoteBlock from '../../components/Blog/QuoteBlock';
import CalloutBlock from '../../components/Blog/CalloutBlock';
import FastFactBlock from '../../components/Blog/FastFactBlock';
import ChecklistBlock from '../../components/Blog/ChecklistBlock';
import DisclaimerBlock from '../../components/Blog/DisclaimerBlock';
import RelatedPosts from '../../components/Blog/RelatedPosts';
import SectionContainer from '../../components/Layout/SectionContainer';
import Hero from './sections/BlogPostHero';

// Sample article data (in production, this would come from an API/CMS)
const articleData = {
  id: 1,
  title: "Understanding Real-World Asset Tokenization",
  subtitle: "A comprehensive guide to how blockchain is transforming traditional asset ownership",
  category: "Education",
  date: "March 15, 2026",
  updatedDate: "March 20, 2026",
  readTime: "5 min read",
  author: {
    name: "CopyM Team",
    role: "Research Team",
    bio: "Our research team analyzes market trends and emerging technologies in blockchain and tokenization.",
    avatar: null
  },
  reviewer: {
    name: "John Smith",
    role: "Head of Compliance",
    bio: "15+ years in financial regulation and compliance."
  },
  content: `
    <p>Real-world asset (RWA) tokenization is revolutionizing how we think about ownership, investment, and value transfer. By converting physical and traditional financial assets into digital tokens on a blockchain, tokenization opens up new possibilities for liquidity, accessibility, and efficiency.</p>
    
    <h2 id="what-is-tokenization">What is Tokenization?</h2>
    <p>Tokenization is the process of converting rights to an asset into a digital token on a blockchain. These tokens represent ownership or entitlement to the underlying asset, which can be anything from real estate and commodities to art and intellectual property.</p>
    
    <h2 id="how-it-works">How Does It Work?</h2>
    <p>The tokenization process involves several key steps:</p>
    <ul>
      <li><strong>Asset Selection:</strong> Identifying and valuing the asset to be tokenized</li>
      <li><strong>Legal Structuring:</strong> Establishing the legal framework for token ownership</li>
      <li><strong>Token Creation:</strong> Minting digital tokens on a blockchain</li>
      <li><strong>Distribution:</strong> Making tokens available to investors</li>
      <li><strong>Management:</strong> Ongoing administration and compliance</li>
    </ul>
    
    <h2 id="benefits">Key Benefits</h2>
    <p>Tokenization offers numerous advantages over traditional asset ownership:</p>
    
    <h3 id="fractional-ownership">Fractional Ownership</h3>
    <p>By dividing assets into smaller tokens, investors can participate with lower capital requirements, making previously inaccessible assets available to a broader audience.</p>
    
    <h3 id="liquidity">Enhanced Liquidity</h3>
    <p>Tokenized assets can be traded on secondary markets, providing liquidity options that traditional assets often lack.</p>
    
    <h3 id="transparency">Transparency</h3>
    <p>Blockchain technology provides an immutable record of ownership and transactions, increasing transparency and reducing fraud risk.</p>
  `,
  headings: [
    { id: "what-is-tokenization", title: "What is Tokenization?", level: 2 },
    { id: "how-it-works", title: "How Does It Work?", level: 2 },
    { id: "benefits", title: "Key Benefits", level: 2 },
    { id: "fractional-ownership", title: "Fractional Ownership", level: 3 },
    { id: "liquidity", title: "Enhanced Liquidity", level: 3 },
    { id: "transparency", title: "Transparency", level: 3 }
  ],
  faqs: [
    {
      question: "What assets can be tokenized?",
      answer: "Almost any asset with value can be tokenized, including real estate, commodities, art, intellectual property, private equity, and more."
    },
    {
      question: "Is tokenization legal?",
      answer: "Yes, when done properly with appropriate legal structuring and regulatory compliance. CopyM ensures all tokenization follows applicable regulations."
    },
    {
      question: "How do I invest in tokenized assets?",
      answer: "Through platforms like CopyM, investors can browse available tokenized assets, complete KYC/AML verification, and purchase tokens directly."
    }
  ],
  disclaimer: "This content is for informational purposes only and does not constitute financial, legal, or investment advice. Tokenized assets involve risks including potential loss of principal. Always conduct your own research and consult with qualified professionals before making investment decisions."
};

const relatedPosts = [
  {
    id: 2,
    title: "The Future of Compliant Digital Asset Marketplaces",
    excerpt: "Explore how regulatory compliance and blockchain technology are creating new opportunities.",
    category: "Insights",
    date: "March 10, 2026",
    readTime: "4 min read",
    author: "CopyM Team",
    slug: "future-compliant-marketplaces"
  },
  {
    id: 3,
    title: "Carbon Credits on Blockchain: A Complete Guide",
    excerpt: "Discover how tokenized carbon credits are bringing transparency to environmental investing.",
    category: "Education",
    date: "March 5, 2026",
    readTime: "6 min read",
    author: "CopyM Team",
    slug: "carbon-credits-blockchain-guide"
  },
  {
    id: 4,
    title: "Gold Tokenization: Traditional Meets Digital",
    excerpt: "How precious metals are being democratized through blockchain-based entitlement.",
    category: "Education",
    date: "February 28, 2026",
    readTime: "4 min read",
    author: "CopyM Team",
    slug: "gold-tokenization-guide"
  }
];

export default function BlogPost() {
  const { slug } = useParams();
  const [article] = useState(articleData);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero article={article} />

      {/* Main Content */}
      <SectionContainer padding="py-8 sm:py-12" bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 px-4 sm:px-0">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
            >
              {/* Author Box */}
              <div className="mb-6 sm:mb-8">
                <AuthorBox
                  name={article.author.name}
                  role={article.author.role}
                  bio={article.author.bio}
                  avatar={article.author.avatar}
                />
              </div>

              {/* Article Body */}
              <div
                className="text-gray-800 leading-relaxed space-y-4 sm:space-y-6"
                style={{ fontFamily: 'Palanquin, sans-serif' }}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Example Content Blocks */}
              <FastFactBlock>
                The global tokenized asset market is projected to reach $16 trillion by 2030, representing a massive shift in how assets are owned and traded.
              </FastFactBlock>

              <CalloutBlock type="info" title="Key Insight">
                Tokenization doesn't change the underlying asset - it changes how ownership is recorded, transferred, and managed.
              </CalloutBlock>

              <QuoteBlock
                quote="Tokenization will fundamentally transform how we think about asset ownership and investment accessibility."
                author="Sarah Johnson"
                role="Chief Innovation Officer"
              />

              <ChecklistBlock
                items={[
                  "Identify the asset to be tokenized",
                  "Establish legal structure and compliance framework",
                  "Choose appropriate blockchain platform",
                  "Create and deploy smart contracts",
                  "Complete regulatory approvals",
                  "Launch to investors"
                ]}
              />

              {/* FAQ Section */}
              <FAQAccordion faqs={article.faqs} />

              {/* Disclaimer */}
              <DisclaimerBlock>
                {article.disclaimer}
              </DisclaimerBlock>
            </motion.article>

            {/* Related Posts */}
            <RelatedPosts posts={relatedPosts} title="Related Articles" />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <TableOfContents headings={article.headings} />
          </aside>
        </div>
      </SectionContainer>
    </div>
  );
}
