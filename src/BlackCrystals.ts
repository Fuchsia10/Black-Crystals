import { FeedAlgorithm, FeedPost } from '../types';

const includedHashtags = [
  'blackcrystals',
  'addtoblkcrystals',
  'blackwoowoo',
  'woowooman',
  'woowoocrew',
  'wworacle',
  'wwwitch',
  'wwfae',
  'wwtarot',
  'wwalyen',
  'blackspirituals',
];

const excludedKeywords = ['wiccan'];

export const blackCrystals: FeedAlgorithm = {
  id: 'blackCrystals',
  name: 'Black Crystals',
  description: 'A celestial, cozy space for Black spirituals to connect and share their cosmic vibes.',
  async run(posts: FeedPost[]) {
    return posts
      .filter((post) => {
        const text = post.text.toLowerCase();
        const hasIncludedHashtag = includedHashtags.some((tag) =>
          text.includes(`#${tag}`)
        );
        const hasExcludedKeyword = excludedKeywords.some((keyword) =>
          text.includes(keyword)
        );
        return hasIncludedHashtag && !hasExcludedKeyword;
      })
      .sort((a, b) => b.timestamp - a.timestamp);
  },
};
