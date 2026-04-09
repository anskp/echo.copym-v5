import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';

/**
 * BlogContentRenderer - renders contentBlocks array as React components
 * Uses the SAME CSS classes defined in BlogPost.jsx <style> tag
 * so admin-created posts look IDENTICAL to static posts
 */

function HeadingBlock({ block }) {
  const { type, content } = block;
  const id = content
    ?.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();

  if (type === 'h1') {
    return (
      <h1 id={id}>
        {content}
      </h1>
    );
  }

  if (type === 'h2') {
    return (
      <h2 id={id}>
        {content}
      </h2>
    );
  }

  if (type === 'h3') {
    return (
      <h3 id={id}>
        {content}
      </h3>
    );
  }

  return null;
}

function ParagraphBlock({ block }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: block.content || '' }}
    />
  );
}

function TextBlock({ block }) {
  // Rich text from Quill editor — already full HTML
  // Convert <ul>/<ol> to custom styled format matching static posts
  let html = block.content || '';
  
  // Transform <ul><li> to custom dot span format
  html = html.replace(
    /<ul([^>]*)>([\s\S]*?)<\/ul>/gi,
    (match, ulAttrs, innerContent) => {
      const items = innerContent.replace(
        /<li[^>]*>([\s\S]*?)<\/li>/gi,
        (liMatch, content) => {
          // Strip <p> tags from content to avoid spacing issues
          const cleanContent = content.replace(/<\/?p[^>]*>/gi, '');
          return `<li class="flex items-start gap-3"><span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span><span class="text-sm sm:text-base text-gray-700" style="font-family: 'Palanquin', sans-serif;">${cleanContent}</span></li>`;
        }
      );
      return `<ul class="space-y-2"${ulAttrs}>${items}</ul>`;
    }
  );
  
  // Transform <ol><li> to custom format with numbered circles
  let counter = 0;
  html = html.replace(
    /<ol([^>]*)>([\s\S]*?)<\/ol>/gi,
    (match, olAttrs, innerContent) => {
      counter = 0;
      const items = innerContent.replace(
        /<li[^>]*>([\s\S]*?)<\/li>/gi,
        (liMatch, content) => {
          counter++;
          // Strip <p> tags from content
          const cleanContent = content.replace(/<\/?p[^>]*>/gi, '');
          return `<li class="flex items-start gap-3"><span class="w-6 h-6 rounded-full bg-gray-200 text-gray-700 text-xs flex items-center justify-center mt-0.5 flex-shrink-0 font-medium">${counter}</span><span class="text-sm sm:text-base text-gray-700" style="font-family: 'Palanquin', sans-serif;">${cleanContent}</span></li>`;
        }
      );
      return `<ol class="space-y-2"${olAttrs}>${items}</ol>`;
    }
  );
  
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function CTABlock({ block }) {
  return (
    <div className="blog-block blog-cta">
      {block.title && (
        <h3 className="blog-cta__title">{block.title}</h3>
      )}
      {block.content && (
        <p className="blog-cta__text">{block.content}</p>
      )}
      {block.caption && (
        <Link to="/tokenization" className="blog-cta__btn">
          {block.caption}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      )}
    </div>
  );
}

function FastFactBlock({ block }) {
  return (
    <div className="blog-block blog-fast-fact">
      <div className="blog-fast-fact__label">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
        Fast Fact
      </div>
      <p className="blog-fast-fact__value">{block.content}</p>
    </div>
  );
}

function QuoteBlock({ block }) {
  return (
    <div className="blog-block blog-quote">
      <p className="blog-quote__text">{block.content}</p>
      {block.title && (
        <div className="blog-quote__author">
          <div className="blog-quote__avatar">
            {block.title.charAt(0)}
          </div>
          <div>
            <div className="blog-quote__name">{block.title}</div>
            <div className="blog-quote__role">{block.role || ''}</div>
          </div>
        </div>
      )}
    </div>
  );
}

function CalloutBlock({ block }) {
  const variant = block.variant || 'info';

  const icons = {
    info: (
      <svg className="blog-callout__icon" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
    warning: (
      <svg className="blog-callout__icon" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ),
    note: (
      <svg className="blog-callout__icon" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    success: (
      <svg className="blog-callout__icon" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  };

  return (
    <div className={`blog-block blog-callout blog-callout--${variant}`}>
      {icons[variant] || icons.info}
      <div className="blog-callout__content">
        {block.title && (
          <div className="blog-callout__title">{block.title}</div>
        )}
        <p className="blog-callout__text">{block.content}</p>
      </div>
    </div>
  );
}

function TableBlock({ block }) {
  const headers = block.headers || [];
  const rows = block.rows || [];

  return (
    <div className="blog-block blog-table">
      {block.caption && <caption>{block.caption}</caption>}
      <table>
        {headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ImageBlock({ block }) {
  return (
    <div className="blog-block blog-image">
      {block.imageUrl ? (
        <Image
          src={block.imageUrl}
          alt={block.caption || ''}
        />
      ) : (
        <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}
      {block.caption && (
        <div className="blog-image__caption">{block.caption}</div>
      )}
    </div>
  );
}

function SourceBlock({ block }) {
  const sources = block.sources || [];

  if (sources.length === 0) return null;

  return (
    <div className="blog-block blog-source">
      <div className="blog-source__title">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        Sources
      </div>
      <ul>
        {sources.map((s, i) => (
          <li key={i}>
            {s.url ? (
              <a href={s.url} className="blog-source__link" target="_blank" rel="noopener noreferrer">
                {s.title || s.url}
              </a>
            ) : (
              <span>{s.title}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// =====================
// MAIN RENDERER
// =====================

const BlogContentRenderer = ({ contentBlocks }) => {
  if (!contentBlocks || contentBlocks.length === 0) return null;

  const renderBlock = (block, index) => {
    const key = block.id || `block-${index}`;

    switch (block.type) {
      case 'h1':
      case 'h2':
      case 'h3':
        return <HeadingBlock key={key} block={block} />;
      case 'paragraph':
        return <ParagraphBlock key={key} block={block} />;
      case 'text':
        return <TextBlock key={key} block={block} />;
      case 'cta':
        return <CTABlock key={key} block={block} />;
      case 'fastfact':
        return <FastFactBlock key={key} block={block} />;
      case 'quote':
        return <QuoteBlock key={key} block={block} />;
      case 'callout':
        return <CalloutBlock key={key} block={block} />;
      case 'table':
        return <TableBlock key={key} block={block} />;
      case 'image':
        return <ImageBlock key={key} block={block} />;
      case 'source':
        return <SourceBlock key={key} block={block} />;
      default:
        console.warn(`Unknown block type: ${block.type}`);
        return null;
    }
  };

  return (
    <div className="blog-content">
      {contentBlocks.map((block, index) => renderBlock(block, index))}
    </div>
  );
};

export default BlogContentRenderer;
