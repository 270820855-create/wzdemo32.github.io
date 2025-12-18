
import { NavLink, Category, PetSkin, BuiltInGame } from './types';

// Custom Pixel Art SVG Icons for Categories
export const PIXEL_ICONS: Record<string, string> = {
  ALL: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M7 0h2v2H7V0zM5 2h6v2H5V2zM3 4h10v2H3V4zM1 6h14v6H1V6zm2 6h10v2H3v-2zm2 2h6v2H5v-2z" /></svg>`,
  COLLECTION: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M7 2h2v2H7V2zM5 4h6v2H5V4zM3 6h10v2H3V6zM1 8h14v2H1V8zm2 2h10v2H3v-2zm2 2h6v2H5v-2zm2 2h2v2H7v-2z" /></svg>`,
  AI: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4 0h8v2H4V0zM2 2h12v2H2V2zM0 4h16v8H0V4zm2 8h12v2H2v-2zm2 2h8v2H4v-2zm1-8h2v2H5V6zm4 0h2v2H9V6zm-4 4h6v2H5v-2z" /></svg>`,
  DESIGN: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M10 0h4v2h-4V0zM8 2h4v2H8V2zM6 4h4v2H6V4zM4 6h4v2H4V6zM2 8h4v2H2V8z" /></svg>`,
  FRONTEND: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M0 2h16v12H0V2zm2 2v8h12V4H2zm2 1h2v2H4V5zm0 4h2v2H4V9zm4-4h4v2H8V5zm0 4h4v2H8V9z" /></svg>`,
  MEDIA: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 2h12v8H2V2zm0 10h12v2H2v-2zM4 4h4v4H4V4zm6 0h2v2h-2V4zm0 4h2v2h-2V8z" /></svg>`,
  TOOLS: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M10 0h6v6h-2V2h-4V0zM0 0h6v2H2v4H0V0zm0 10h2v4h4v2H0v-6zm10 6v-2h4v-4h2v6h-6zM6 6h4v4H6V6z" /></svg>`,
  GAME: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M3 4h10v6H3V4zm-2 2h2v2H1V6zm12 0h2v2h-2V6zm-9 6h8v2H4v-2z" /></svg>`,
};

export const SANTA_CAT_SVG = `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 42 Q10 28 32 28 Q54 28 54 42 L54 58 Q32 62 10 58 Z" fill="#FDBA74" stroke="black" stroke-width="3"/><path d="M16 30 L10 12 L26 28 Z" fill="#FDBA74" stroke="black" stroke-width="2"/><path d="M48 30 L54 12 L38 28 Z" fill="#FDBA74" stroke="black" stroke-width="2"/><circle cx="22" cy="45" r="4" fill="black"/><circle cx="42" cy="45" r="4" fill="black"/><path d="M20 20 Q32 5 48 12 L52 25 L12 25 Z" fill="#FF003C" stroke="black" stroke-width="2"/><rect x="10" y="22" width="44" height="8" rx="4" fill="white" stroke="black" stroke-width="2"/><circle cx="50" cy="12" r="6" fill="white" stroke="black" stroke-width="2"/><path d="M30 50 Q32 54 34 50" fill="none" stroke="black" stroke-width="2"/></svg>`;

export const COLORS = [
  'bg-jinx-pink',
  'bg-jinx-blue',
  'bg-neon-green',
  'bg-purple-500',
  'bg-yellow-400',
  'bg-gray-800',
  'bg-red-500',
  'bg-blue-500',
];

export const CATEGORIES: { id: Category; icon: string }[] = [
  { id: 'ALL', icon: PIXEL_ICONS.ALL },
  { id: 'COLLECTION', icon: PIXEL_ICONS.COLLECTION },
  { id: 'AI', icon: PIXEL_ICONS.AI },
  { id: 'DESIGN', icon: PIXEL_ICONS.DESIGN },
  { id: 'FRONTEND', icon: PIXEL_ICONS.FRONTEND },
  { id: 'MEDIA', icon: PIXEL_ICONS.MEDIA },
  { id: 'TOOLS', icon: PIXEL_ICONS.TOOLS },
  { id: 'GAME', icon: PIXEL_ICONS.GAME },
];

export const PET_SKINS: PetSkin[] = [
  { id: 'girl-white', name: '暴走蓝发', avatarColor: '#00E5FF', description: '蓝发双马尾的疯狂少女' },
  { id: 'girl-pink', name: '星之使者', avatarColor: '#0F172A', description: '披着白袍的神秘少女' },
  { id: 'goth-bunny', name: '暗夜兔', avatarColor: '#18181B', description: '酷酷的暗黑系兔耳少女' },
  { id: 'cat-orange', name: '墨水猫', avatarColor: '#FDBA74', description: '打翻了墨水瓶' },
];

export const BUILT_IN_GAMES: BuiltInGame[] = [
  { id: 'tetris3d', name: '微型积木', description: 'BUILDER', icon: '🧱', color: 'bg-yellow-400' },
  { id: 'snake', name: '贪吃蛇', description: 'CLASSIC', icon: '🐍', color: 'bg-neon-green' },
  { id: '2048', name: '2048', description: 'PUZZLE', icon: '🔢', color: 'bg-orange-400' },
  { id: 'minesweeper', name: '扫雷', description: 'LOGIC', icon: '💣', color: 'bg-gray-600' },
];

export const SEARCH_ENGINES = [
  { id: 'google', name: 'GO', url: 'https://www.google.com/search?q=', color: '#4285F4' },
  { id: 'baidu', name: 'DU', url: 'https://www.baidu.com/s?wd=', color: '#2932E1' },
  { id: 'bilibili', name: 'BILI', url: 'https://search.bilibili.com/all?keyword=', color: '#FB7299' },
  { id: 'github', name: 'GIT', url: 'https://github.com/search?q=', color: '#171515' },
];

export const DEFAULT_LINKS: NavLink[] = [
  // --- SPECIAL / FEATURED ---
  { id: 'cat-memo', title: '猫猫备忘录（独家）', url: 'https://270820855-create.github.io/CatTxt.github.io', color: 'bg-jinx-blue text-white', icon: SANTA_CAT_SVG, category: 'TOOLS', isFavorite: true },

  // --- AI ZONE ---
  { id: 'ai-1', title: '豆包', url: 'https://www.doubao.com', color: 'bg-jinx-pink text-white', icon: '👾', category: 'AI' },
  { id: 'ai-2', title: '文心一言', url: 'https://yiyan.baidu.com', color: 'bg-jinx-pink text-white', icon: '👾', category: 'AI' },
  { id: 'ai-3', title: '讯飞星火', url: 'https://xinghuo.xfyun.cn', color: 'bg-jinx-pink text-white', icon: '⚡', category: 'AI' },
  { id: 'ai-4', title: '通义千问', url: 'https://tongyi.aliyun.com', color: 'bg-jinx-pink text-white', icon: '👾', category: 'AI' },
  { id: 'ai-pangu', title: '盘古', url: 'https://www.huaweicloud.com', color: 'bg-jinx-pink text-white', icon: '🦾', category: 'AI' },
  { id: 'ai-deepseek', title: 'deepseek', url: 'https://www.deepseek.com', color: 'bg-jinx-pink text-white', icon: '🧠', category: 'AI' },
  { id: 'ai-prompthero', title: 'prompthero', url: 'https://prompthero.com', color: 'bg-jinx-pink text-white', icon: '📝', category: 'AI' },
  { id: 'ai-8', title: 'ChatGPT', url: 'https://chat.openai.com', color: 'bg-neon-green text-black', icon: '👾', category: 'AI' },
  { id: 'ai-picwish', title: 'Picwish', url: 'https://picwish.com', color: 'bg-jinx-pink text-white', icon: '✂️', category: 'AI' },
  { id: 'ai-dalle', title: 'DALL·E 2 (绘画AI)', url: 'https://openai.com/dall-e-2', color: 'bg-jinx-pink text-white', icon: '🎨', category: 'AI' },
  { id: 'ai-anthropic', title: 'Anthropic (聊天AI)', url: 'https://www.anthropic.com', color: 'bg-jinx-pink text-white', icon: '💬', category: 'AI' },
  { id: 'ai-perplexity', title: 'YOU (聊天AI)', url: 'https://www.perplexity.ai', color: 'bg-jinx-pink text-white', icon: '🔍', category: 'AI' },
  { id: 'ai-13', title: 'midjourney (绘画AI)', url: 'https://midjourney.com', color: 'bg-jinx-pink text-white', icon: '🎨', category: 'AI' },
  { id: 'ai-dreamlike', title: 'Dreamlike.art (绘画AI)', url: 'https://dreamlike.art', color: 'bg-jinx-pink text-white', icon: '✨', category: 'AI' },
  { id: 'ai-nightcafe', title: 'NightCafe (绘画AI)', url: 'https://creator.nightcafe.studio', color: 'bg-jinx-pink text-white', icon: '☕', category: 'AI' },
  { id: 'ai-tiamat', title: 'Tiamat (绘画AI)', url: 'https://tiamat.world', color: 'bg-jinx-pink text-white', icon: '🐉', category: 'AI' },
  { id: 'ai-17', title: 'HuggingFace', url: 'https://huggingface.co', color: 'bg-jinx-pink text-white', icon: '🤗', category: 'AI' },
  { id: 'ai-lexica', title: 'Lexica (绘画AI)', url: 'https://lexica.art', color: 'bg-jinx-pink text-white', icon: '🖼️', category: 'AI' },
  { id: 'ai-scribble', title: 'Scribble Diffusion (绘画)', url: 'https://scribblediffusion.com', color: 'bg-jinx-pink text-white', icon: '🖍️', category: 'AI' },
  { id: 'ai-leonardo', title: 'Leonardo (AI绘图社区)', url: 'https://leonardo.ai', color: 'bg-jinx-pink text-white', icon: '🎭', category: 'AI' },
  { id: 'ai-promptbase', title: 'Promptbase (AI提示词)', url: 'https://promptbase.com', color: 'bg-jinx-pink text-white', icon: '📋', category: 'AI' },
  { id: 'ai-waifulabs', title: 'waifulabs (二次元头像)', url: 'https://waifulabs.com', color: 'bg-jinx-pink text-white', icon: '👱‍♀️', category: 'AI' },
  { id: 'ai-galileo', title: 'Galileo AI (UI设计)', url: 'https://usegalileo.ai', color: 'bg-jinx-pink text-white', icon: '📐', category: 'AI' },

  // --- DESIGN ZONE ---
  { id: 'des-1', title: 'Figma', url: 'https://www.figma.com', color: 'bg-purple-600 text-white', icon: '📐', category: 'DESIGN' },
  { id: 'des-pixel', title: '千亿像素看中国', url: 'https://pf.bigpixel.cn', color: 'bg-jinx-pink text-white', icon: '📷', category: 'DESIGN' },
  { id: 'des-airpano', title: '环游世界', url: 'https://airpano.org.cn', color: 'bg-jinx-pink text-white', icon: '🌍', category: 'DESIGN' },
  { id: 'des-4', title: '猫趣', url: 'https://catfun.org', color: 'bg-jinx-pink text-white', icon: '🐱', category: 'DESIGN' },

  // --- FRONTEND ZONE ---
  { id: 'fe-csdn', title: 'CSDN', url: 'https://csdn.net', color: 'bg-red-600 text-white', icon: 'C', category: 'FRONTEND' },
  { id: 'fe-2', title: 'Github', url: 'https://github.com', color: 'bg-black text-white', icon: '👾', category: 'FRONTEND' },
  { id: 'fe-gitcode', title: 'Gitcode', url: 'https://gitcode.com', color: 'bg-blue-600 text-white', icon: 'G', category: 'FRONTEND' },
  { id: 'fe-4', title: '菜鸟工具', url: 'https://cainiaojc.com', color: 'bg-green-500 text-white', icon: '🛠️', category: 'FRONTEND' },
  { id: 'fe-gitee', title: '开源中国', url: 'https://gitee.com', color: 'bg-red-500 text-white', icon: 'OS', category: 'FRONTEND' },

  // --- MEDIA ZONE ---
  { id: 'med-1', title: 'Bilibili', url: 'https://www.bilibili.com', color: 'bg-blue-400 text-white', icon: '📺', category: 'MEDIA' },
  { id: 'med-2', title: 'YouTube', url: 'https://www.youtube.com', color: 'bg-red-600 text-white', icon: '▶️', category: 'MEDIA' },
  { id: 'med-3', title: '樱花动漫', url: 'http://hyys19.com', color: 'bg-jinx-pink text-white', icon: '🌸', category: 'MEDIA' },
  { id: 'med-orange', title: '橘子动漫', url: 'https://jzacg.com', color: 'bg-orange-400 text-white', icon: '🍊', category: 'MEDIA' },
  { id: 'med-agedm', title: 'AGE动漫', url: 'https://agedm.org', color: 'bg-jinx-pink text-white', icon: 'A', category: 'MEDIA' },
  { id: 'med-isekai', title: '异世界动漫', url: 'https://dmmiku.com', color: 'bg-purple-400 text-white', icon: '🌀', category: 'MEDIA' },
  { id: 'med-mwcy', title: '喵物次元', url: 'https://mwcy.net', color: 'bg-jinx-pink text-white', icon: '🐱', category: 'MEDIA' },
  { id: 'med-anime1', title: '動畫線上看', url: 'https://anime1.me', color: 'bg-blue-500 text-white', icon: '📺', category: 'MEDIA' },
  { id: 'med-xfani', title: '稀饭动漫', url: 'https://dick.xfani.com', color: 'bg-pink-400 text-white', icon: '🍚', category: 'MEDIA' },
  { id: 'med-acgfta', title: '饭团动漫', url: 'https://acgfta.com', color: 'bg-gray-700 text-white', icon: '🍙', category: 'MEDIA' },
  { id: 'med-skr2', title: '樱之空动漫', url: 'https://skr2.cc', color: 'bg-pink-300 text-white', icon: '🌸', category: 'MEDIA' },
  { id: 'med-zhizi', title: '栀子次元文学网', url: 'https://zhizihuan.com', color: 'bg-green-400 text-white', icon: '🌿', category: 'MEDIA' },
  { id: 'med-jjwxc', title: '晋江文学城', url: 'https://jjwxc.net', color: 'bg-green-600 text-white', icon: '🌿', category: 'MEDIA' },
  { id: 'med-fqnovel', title: '番茄小说', url: 'https://fanqienovel.com', color: 'bg-red-500 text-white', icon: '🍅', category: 'MEDIA' },
  { id: 'med-qimao', title: '七猫小说', url: 'https://qimao.com', color: 'bg-orange-300 text-white', icon: '🐱', category: 'MEDIA' },
  { id: 'med-faloo', title: '飞卢小说', url: 'https://faloo.com', color: 'bg-blue-400 text-white', icon: '📚', category: 'MEDIA' },
  { id: 'med-manman', title: '漫漫漫画', url: 'https://manmanapp.com', color: 'bg-pink-500 text-white', icon: '🖼️', category: 'MEDIA' },
  { id: 'med-dm5', title: '动漫屋', url: 'https://dm5.com', color: 'bg-blue-600 text-white', icon: '🏠', category: 'MEDIA' },
  { id: 'med-kuaikan', title: '快看漫画', url: 'https://kuaikanmanhua.com', color: 'bg-yellow-400 text-black', icon: '👀', category: 'MEDIA' },

  // --- TOOLS ZONE ---
  { id: 'tool-wiki', title: 'wikiHow', url: 'https://zh.wikihow.com', color: 'bg-blue-500 text-white', icon: '📖', category: 'TOOLS' },
  { id: 'tool-2', title: '中午吃什么', url: 'https://chishenme.xyz', color: 'bg-gray-200 text-black', icon: '🍱', category: 'TOOLS' },
  { id: 'tool-emoji', title: 'emojimix', url: 'https://tikolu.net', color: 'bg-yellow-400 text-black', icon: '😄', category: 'TOOLS' },
  { id: 'tool-dxzy', title: '大学资源网', url: 'https://dxzy163.com', color: 'bg-blue-400 text-white', icon: '📚', category: 'TOOLS' },
  { id: 'tool-oeasy', title: '0easy', url: 'https://oeasy.org', color: 'bg-green-500 text-white', icon: '🎓', category: 'TOOLS' },
  { id: 'tool-6', title: 'Mikutap', url: 'https://aidn.jp', color: 'bg-jinx-pink text-white', icon: '🎵', category: 'TOOLS' },
  { id: 'tool-chengyu', title: '为所欲为成语', url: 'https://lab.bangbang93.com', color: 'bg-red-400 text-white', icon: '📝', category: 'TOOLS' },
  { id: 'tool-facecards', title: '说话表情包', url: 'https://facecards.com', color: 'bg-orange-500 text-white', icon: '🤪', category: 'TOOLS' },
  { id: 'tool-picrew', title: '动漫捏脸', url: 'https://picrew.me', color: 'bg-pink-400 text-white', icon: '😊', category: 'TOOLS' },
  { id: 'tool-ehow', title: 'eHow', url: 'https://ehow.com', color: 'bg-yellow-500 text-black', icon: '💡', category: 'TOOLS' },
  { id: 'tool-removebg', title: '在线抠图', url: 'https://remove.bg', color: 'bg-purple-500 text-white', icon: '✂️', category: 'TOOLS' },
  { id: 'tool-youqu', title: '有趣网址之家', url: 'https://youquhome.com', color: 'bg-orange-400 text-white', icon: '🏠', category: 'TOOLS' },
  { id: 'tool-voicv', title: 'Voicv (声音克隆)', url: 'https://voicv.com', color: 'bg-pink-500 text-white', icon: '🎙️', category: 'TOOLS' },
  { id: 'tool-auto', title: '凹凸工坊', url: 'https://autohanding.com', color: 'bg-gray-600 text-white', icon: '🏭', category: 'TOOLS' },
  { id: 'tool-docsmall', title: 'docsmall (文件处理)', url: 'https://docsmall.com', color: 'bg-blue-500 text-white', icon: '📄', category: 'TOOLS' },

  // --- GAME ZONE ---
  { id: 'game-maze', title: 'MAZE TOYS', url: 'https://maze.toys', color: 'bg-yellow-400 text-black', icon: '🧩', category: 'GAME' },
  { id: 'game-yikm', title: 'yikm.net', url: 'https://yikm.net', color: 'bg-purple-600 text-white', icon: '🎮', category: 'GAME' },
  { id: 'game-farter', title: 'farter', url: 'https://farter.cn', color: 'bg-gray-500 text-white', icon: '💨', category: 'GAME' },
  { id: 'game-4', title: 'crazygames', url: 'https://crazygames.com', color: 'bg-purple-600 text-white', icon: '🕹️', category: 'GAME' },
  { id: 'game-5', title: '在线 DOS 游戏', url: 'https://dos.zcrc.cz', color: 'bg-black text-white', icon: '💾', category: 'GAME' },
  { id: 'game-no-move', title: '到底是谁没动', url: 'https://emojisandearthporn.com', color: 'bg-red-400 text-white', icon: '🤔', category: 'GAME' },
  { id: 'game-cube', title: '在线拼魔方', url: 'https://tools.bqrdh.com', color: 'bg-blue-500 text-white', icon: '🧊', category: 'GAME' },
  { id: 'game-rainbow', title: '彩虹皮生成器', url: 'https://chp.shadiao.app', color: 'bg-pink-400 text-white', icon: '🌈', category: 'GAME' },
  { id: 'game-rain', title: '雨声生成器', url: 'https://gogoame.sumbloun.com', color: 'bg-blue-300 text-white', icon: '🌧️', category: 'GAME' },
];
