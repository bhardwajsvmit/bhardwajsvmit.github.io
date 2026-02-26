"use client";

import React, { useState, useEffect } from "react";
import { VSCodeLayout } from "./vscode/VSCodeLayout";

export default function VSCodePortfolio() {
  const [activeTab, setActiveTab] = useState("README.md");
  const [openTabs, setOpenTabs] = useState(["README.md"]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [experienceOpen, setExperienceOpen] = useState(true);
  const [careerOpen, setCareerOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [draggedTab, setDraggedTab] = useState<string | null>(null);
  const [fileContents, setFileContents] = useState({
    "README.md": `  ## Sumit Bhardwaj
  ## Senior Frontend Engineer

  **GitHub:** [bhardwajsvmit](https://github.com/bhardwajsvmit)
  **LinkedIn:** [bhardwajsvmit](https://linkedin.com/in/bhardwajsvmit)
  **Email:** [bhardwajsvmit@gmail.com](mailto:bhardwajsvmit@gmail.com)
  **WhatsApp:** [+91 9654901601](https://wa.me/919654901601)

  ---

  ### 👨‍💻 About Me

  Senior Frontend Engineer with **5+ years** of experience building scalable, high-performance web applications. 

  Specialized in:
  - ⚛️ React, Next.js, TypeScript
  - 🚀 Server-Side Rendering (SSR) & SEO Optimization
  - 📊 Performance Tuning & Core Web Vitals
  - 🔗 Web3 & Blockchain Integration
  - 🎯 Modern Frontend Architecture

  ### 🎯 Career Highlights

  - 🔥 **50% reduction** in Time to Interactive (TTI) through Next.js migration
  - 📈 **4x traffic growth** (300K → 1.2M users/week) via SSR & SEO
  - ⚡ **30% reduction** in backend load using React Query
  - 🐛 **70% faster** bug resolution with Sentry integration
  - 📱 Built and shipped React Native apps for Android & iOS

  ### 🛠️ Tech Stack

  **Frontend:** React • Next.js • TypeScript • JavaScript • HTML5 • CSS3
  **State Management:** React Query • Redux • Context API
  **Web3:** ethers.js • web3.js • Smart Contracts
  **Tools:** Webpack • Vite • Git • Sentry • REST APIs • GraphQL
  **Design:** Responsive Design • Mobile-First • Performance Optimization

  ---

  💼 **Currently:** Lead Frontend Engineer @ RareBetSports
  🎓 **Education:** MCA, BCA from GGSIPU
  🌟 **Interests:** Web Performance, Web3, Open Source`,

    "rarebetsports.tsx": `/**
   * RareBetSports - Web3 Daily Fantasy Sports Platform
   * Role: Lead Frontend Engineer
   * Duration: Sep 2024 - Present
   * 
   * @description Architecting a complete Web3-powered fantasy sports platform
   * from the ground up, integrating blockchain technology with real-time sports data.
   */

  import React, { useState, useEffect } from 'react';
  import { ethers } from 'ethers';
  import { useQuery } from '@tanstack/react-query';

  interface MatchData {
    id: string;
    teams: [string, string];
    startTime: Date;
    odds: number[];
  }

  export const RareBetDashboard: React.FC = () => {
    const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
    const [account, setAccount] = useState<string>('');

    // Fetch live match data
    const { data: matches } = useQuery<MatchData[]>({
      queryKey: ['matches'],
      queryFn: async () => {
        const res = await fetch('/api/matches/live');
        return res.json();
      },
      refetchInterval: 30000 // Real-time updates
    });

    // Connect Web3 wallet
    const connectWallet = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await web3Provider.send("eth_requestAccounts", []);
        
        setProvider(web3Provider);
        setAccount(accounts[0]);
      }
    };

    // Smart contract interaction
    const placeBet = async (matchId: string, amount: string) => {
      if (!provider) return;
      
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );
      
      const tx = await contract.placeBet(matchId, {
        value: ethers.utils.parseEther(amount)
      });
      
      await tx.wait();
    };

    return (
      <div className="dashboard">
        <Header account={account} onConnect={connectWallet} />
        <MatchList matches={matches} onBet={placeBet} />
        <UserStats account={account} />
      </div>
    );
  };

  /**
   * Key Achievements:
   * 
   * ✅ Architected scalable frontend using React + TypeScript + Next.js
   * ✅ Integrated Ethereum smart contracts with ethers.js
   * ✅ Built real-time sports data integration
   * ✅ Designed responsive, performance-optimized UI components
   * ✅ Implemented wallet connection & transaction handling
   * 
   * Tech Stack:
   * React • TypeScript • Next.js • ethers.js • React Query • TailwindCSS
   */`,

    "jio-platforms.tsx": `/**
   * Jio Platforms Limited - Streaming Platform Migration
   * Role: Frontend Engineer
   * Duration: Jan 2023 - Sep 2023
   * 
   * @description Led the migration from React to Next.js for a high-traffic
   * streaming platform, focusing on SSR, SEO, and performance optimization.
   */

  import React from 'react';
  import { GetServerSideProps } from 'next';
  import { useQuery } from '@tanstack/react-query';
  import { dehydrate, QueryClient } from '@tanstack/react-query';

  interface VideoContent {
    id: string;
    title: string;
    thumbnail: string;
    duration: number;
    views: number;
  }

  // Server-Side Rendering for SEO & Performance
  export const getServerSideProps: GetServerSideProps = async (context) => {
    const queryClient = new QueryClient();
    
    // Pre-fetch data on server
    await queryClient.prefetchQuery(['trending'], fetchTrendingContent);
    
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  };

  const StreamingHomePage: React.FC = () => {
    // React Query for efficient data fetching
    const { data: trending, isLoading } = useQuery<VideoContent[]>({
      queryKey: ['trending'],
      queryFn: fetchTrendingContent,
      staleTime: 5 * 60 * 1000, // 5 minutes
    });

    return (
      <div className="streaming-platform">
        <Hero />
        <TrendingSection content={trending} loading={isLoading} />
        <Categories />
        <RecommendedForYou />
      </div>
    );
  };

  /**
   * Key Achievements:
   * 
   * 🚀 Migrated from React → Next.js (SSR implementation)
   * ⚡ Reduced Time to Interactive (TTI) by ~50%
   * 📈 Increased traffic from 300K → 1.2M users/week
   * 🔄 Introduced React Query, reducing backend load by ~30%
   * 🐛 Integrated Sentry, improving bug resolution by 70%
   * 🎯 Implemented code splitting & lazy loading
   * 🔍 Enhanced SEO with meta tags & structured data
   * 
   * Tech Stack:
   * Next.js • React • TypeScript • React Query • Sentry • SEO
   * 
   * Performance Metrics:
   * - First Contentful Paint (FCP): 1.2s → 0.8s
   * - Largest Contentful Paint (LCP): 3.5s → 1.8s
   * - Time to Interactive (TTI): 5.2s → 2.6s
   * - Lighthouse Score: 65 → 95
   */

  export default StreamingHomePage;`,

    "parcel-web3.tsx": `/**
   * Parcel Inc. - Web3 Dashboards & Applications
   * Role: Frontend Developer
   * Duration: Sep 2023 - Sep 2024
   * 
   * @description Built enterprise Web3 dashboards and user-facing applications
   * with smart contract integration and blockchain data visualization.
   */

  import React, { useState, useEffect } from 'react';
  import { ethers } from 'ethers';
  import Web3 from 'web3';

  interface Transaction {
    hash: string;
    from: string;
    to: string;
    value: string;
    timestamp: number;
  }

  interface WalletData {
    address: string;
    balance: string;
    transactions: Transaction[];
  }

  export const Web3Dashboard: React.FC = () => {
    const [walletData, setWalletData] = useState<WalletData | null>(null);
    const [loading, setLoading] = useState(false);

    // Initialize Web3 providers
    useEffect(() => {
      const initWeb3 = async () => {
        if (typeof window.ethereum !== 'undefined') {
          const web3 = new Web3(window.ethereum);
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          
          // Request account access
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          const balance = await provider.getBalance(address);
          
          setWalletData({
            address,
            balance: ethers.utils.formatEther(balance),
            transactions: []
          });
        }
      };
      
      initWeb3();
    }, []);

    // Smart contract interaction
    const executeContract = async (
      contractAddress: string,
      abi: any[],
      method: string,
      params: any[]
    ) => {
      setLoading(true);
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        
        const tx = await contract[method](...params);
        await tx.wait();
        
        return tx;
      } catch (error) {
        console.error('Contract execution failed:', error);
      } finally {
        setLoading(false);
      }
    };

    return (
     <div className="web3-dashboard">
        <WalletOverview data={walletData} />
        <TransactionHistory transactions={walletData?.transactions || []} />
        <ContractInteraction onExecute={executeContract} loading={loading} />
        <NetworkStats />
      </div>
    );
  };

  /**
   * Key Achievements:
   * 
   * 🔗 Developed Web3 dashboards using React + TypeScript
   * 🔐 Integrated smart contracts with ethers.js & web3.js
   * ⚡ Optimized performance for real-time blockchain data
   * 🌐 Ensured cross-browser compatibility
   * 📊 Built data visualization components for blockchain metrics
   * 
   * Tech Stack:
   * React • TypeScript • ethers.js • web3.js • Chart.js
   */

  export default Web3Dashboard;`,

    "myclassroom.tsx": `/**
   * MyClassroom - EdTech Platform
   * Role: Frontend Developer
   * Duration: Feb 2021 - Jan 2023
   * 
   * @description Built comprehensive analytics dashboard and video conferencing
   * modules for an online education platform.
   */

  import React, { useState } from 'react';
  import { useQuery, useMutation } from '@tanstack/react-query';
  import { Line, Bar, Pie } from 'react-chartjs-2';

  interface AnalyticsData {
    dailyUsers: number[];
    engagement: number;
    completionRate: number;
    revenue: number;
  }

  export const AnalyticsDashboard: React.FC = () => {
    const [dateRange, setDateRange] = useState({ from: '', to: '' });

    // Fetch analytics data
    const { data: analytics } = useQuery<AnalyticsData>({
      queryKey: ['analytics', dateRange],
      queryFn: async () => {
        const res = await fetch(\`/api/analytics?from=\${dateRange.from}&to=\${dateRange.to}\`);
        return res.json();
      }
    });

    return (
      <div className="analytics-dashboard">
        <MetricsGrid analytics={analytics} />
        <UserEngagementChart data={analytics?.dailyUsers} />
        <RevenueBreakdown />
        <CoursePerformance />
      </div>
    );
  };

  /**
   * Video Conferencing Module
   * Integrated third-party SDK for real-time video communication
   */
  export const VideoConference: React.FC = () => {
    const [isJoined, setIsJoined] = useState(false);
    const [participants, setParticipants] = useState<string[]>([]);

    const joinMeeting = async (meetingId: string) => {
      // Video SDK integration
      const client = await initVideoClient();
      await client.join(meetingId);
      setIsJoined(true);
    };

    return (
      <div className="video-conference">
        <VideoGrid participants={participants} />
        <Controls onToggleAudio={toggleAudio} onToggleVideo={toggleVideo} />
        <Chat />
      </div>
    );
  };

  /**
   * Payment Integration
   * Paytm & Razorpay implementation
   */
  export const PaymentGateway: React.FC = () => {
    const processPayment = useMutation({
      mutationFn: async (amount: number) => {
        const order = await fetch('/api/payment/create-order', {
          method: 'POST',
          body: JSON.stringify({ amount })
        });
        return order.json();
      }
    });

    return (
      <div className="payment-gateway">
        <PaymentOptions />
        <SecureCheckout onPay={processPayment.mutate} />
      </div>
    );
  };

  /**
   * Key Achievements:
   * 
   * 📊 Built React-based analytics dashboard (35% engagement increase)
   * 🎥 Developed video conferencing modules with third-party SDKs
   * 💳 Integrated Paytm and Razorpay payment solutions
   * 📱 Shipped React Native apps for Android & iOS
   * ⚡ Implemented real-time updates using WebSockets
   * 
   * Tech Stack:
   * React • React Native • TypeScript • Chart.js • WebRTC
   * Paytm • Razorpay • WebSockets • REST APIs
   */`,

    "skills.json": `{
    "frontend": {
      "frameworks": [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "React Native"
      ],
      "stateManagement": [
        "React Query",
        "Redux",
        "Context API",
        "Zustand"
      ],
      "styling": [
        "Tailwind CSS",
        "CSS-in-JS",
        "SASS/SCSS",
        "Styled Components",
        "Responsive Design",
        "Mobile-First Development"
      ]
    },
    "backend": {
      "apis": [
        "REST APIs",
        "GraphQL",
        "WebSockets"
      ],
      "integration": [
        "Third-party SDKs",
        "Payment Gateways",
        "Video SDKs"
      ]
    },
    "web3": {
      "libraries": [
        "ethers.js",
        "web3.js"
      ],
      "concepts": [
        "Smart Contracts",
        "Wallet Integration",
        "Blockchain Data"
      ]
    },
    "performance": {
      "optimization": [
        "Server-Side Rendering (SSR)",
        "Code Splitting",
        "Lazy Loading",
        "Core Web Vitals",
        "Performance Tuning"
      ],
      "seo": [
        "SEO Optimization",
        "Meta Tags",
        "Structured Data",
        "Open Graph"
      ]
    },
    "tools": {
      "buildTools": [
        "Webpack",
        "Vite",
        "Babel"
      ],
      "versionControl": [
        "Git",
        "GitHub",
        "GitLab"
      ],
      "monitoring": [
        "Sentry",
        "Google Analytics",
        "Performance Monitoring"
      ],
      "testing": [
        "Jest",
        "React Testing Library",
        "Cypress"
      ]
    },
    "currentlyLearning": [
      "Advanced Web3 Patterns",
      "Micro-frontends",
      "Server Components",
      "Edge Computing"
    ]
  }`,

    "resume.md": `# Professional Experience

  ## 🚀 RareBetSports (Remote)
  **Lead Frontend Engineer** | Sep 2024 – Present

  - Architected and delivered the **entire frontend** for a Web3-powered daily fantasy sports platform
  - Designed **scalable frontend architecture** using React, TypeScript, and Next.js
  - Integrated **Ethereum smart contracts** and real-time sports data
  - Built **responsive, performance-optimized** UI components
  - Implemented wallet connection and blockchain transaction handling

  **Tech Stack:** React, TypeScript, Next.js, ethers.js, React Query, TailwindCSS

  ---

  ## 🔗 Parcel Inc. (Remote)
  **Frontend Developer** | Sep 2023 – Sep 2024

  - Developed **Web3 dashboards** and user-facing applications using React and TypeScript
  - Integrated **smart contracts** using ethers.js and web3.js
  - Optimized performance and ensured **cross-browser compatibility**
  - Built data visualization components for blockchain metrics

  **Tech Stack:** React, TypeScript, ethers.js, web3.js, Chart.js

  ---

  ## 📺 Jio Platforms Limited
  **Frontend Engineer** | Jan 2023 – Sep 2023

  - **Migrated platform** from React to Next.js, reducing Time to Interactive by **~50%**
  - Implemented **SSR and SEO optimizations**, increasing weekly traffic from **300K to 1.2M users**
  - Introduced **React Query**, reducing backend load by **~30%**
  - Integrated **Sentry** error monitoring, improving bug resolution time by **70%**
  - Enhanced Core Web Vitals and Lighthouse scores significantly

  **Tech Stack:** Next.js, React, TypeScript, React Query, Sentry, SEO

  **Performance Improvements:**
  - First Contentful Paint: 1.2s → 0.8s
  - Largest Contentful Paint: 3.5s → 1.8s
  - Time to Interactive: 5.2s → 2.6s
  - Lighthouse Score: 65 → 95

  ---

  ## 🎓 MyClassroom
  **Frontend Developer** | Feb 2021 – Jan 2023

  - Built **React-based analytics dashboard**, increasing engagement by **35%**
  - Developed **video conferencing modules** using third-party SDKs
  - Integrated **Paytm and Razorpay** payment solutions
  - Shipped **React Native apps** for Android and iOS
  - Implemented real-time updates using WebSockets

  **Tech Stack:** React, React Native, TypeScript, WebRTC, Chart.js, WebSockets

  ---

  # Education

  ## 🎓 Guru Gobind Singh Indraprastha University

  **Master of Computer Applications (MCA)** | 2019 – 2021

  **Bachelor of Computer Applications (BCA)** | 2016 – 2019

  ---

  # Certifications & Achievements

  ✅ **5+ years** of professional frontend development experience
  ✅ Led **complete frontend architecture** for Web3 platform
  ✅ Improved performance metrics by **50%+** across multiple experience
  ✅ Scaled applications from **300K to 1.2M+** weekly users
  ✅ Expert in **React, Next.js, TypeScript, and Web3** technologies`,

    "contact.tsx": `/**
   * Contact Information
   * Get in touch for opportunities, collaborations, or just to say hi!
   */

  import React from 'react';
  import { Mail, Phone, Github, Linkedin, MapPin, Calendar } from 'lucide-react';

  interface ContactInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    location: string;
    availability: string;
  }

  const contact: ContactInfo = {
    name: "Sumit Bhardwaj",
    title: "Senior Frontend Engineer",
    email: "bhardwajsvmit@gmail.com",
    phone: "+91 9654901601",
    github: "https://github.com/bhardwajsvmit",
    linkedin: "https://linkedin.com/in/bhardwajsvmit",
    location: "India (Remote)",
    availability: "Open to opportunities"
  };

  export const ContactCard: React.FC = () => {
    return (
      <div className="contact-card">
        <div className="header">
          <h1>{contact.name}</h1>
          <h2>{contact.title}</h2>
        </div>

        <div className="contact-methods">
          <a href={"mailto:" + contact.email} className="contact-link">
            <Mail size={20} />
            <span>{contact.email}</span>
          </a>
          
          <a href={"tel:" + contact.phone} className="contact-link">
            <Phone size={20} />
            <span>{contact.phone}</span>
          </a>
          
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
            <Github size={20} />
            <span>bhardwajsvmit</span>
          </a>
          
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
            <Linkedin size={20} />
            <span>bhardwajsvmit</span>
          </a>
          
          <div className="contact-link">
            <MapPin size={20} />
            <span>{contact.location}</span>
          </div>
          
          <div className="contact-link">
            <Calendar size={20} />
            <span>{contact.availability}</span>
          </div>
        </div>

        <div className="cta">
          <h3>Let's build something amazing together! 🚀</h3>
          <p>
            I'm passionate about creating high-performance web applications
            and pushing the boundaries of frontend development. Whether you're
            looking for a senior engineer, technical consultant, or collaborator
            on an exciting project, I'd love to hear from you.
          </p>
        </div>

        <div className="expertise">
          <h4>What I Bring:</h4>
          <ul>
            <li>⚛️ 5+ years of React & Next.js expertise</li>
            <li>🚀 Performance optimization & SSR implementation</li>
            <li>🔗 Web3 & blockchain application development</li>
            <li>📈 Proven track record of scaling applications</li>
            <li>🎯 Strong focus on user experience & code quality</li>
          </ul>
        </div>
      </div>
    );
  };

  export default ContactCard;`,
  });

  const [editedFiles, setEditedFiles] = useState<Set<string>>(new Set());

  // Format time with leading zeros to ensure consistent SSR/client rendering
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // strip out any <span ...>...</span> tags that might be pasted from the preview
  const sanitize = (text: string) =>
    text.replace(/<span[^>]*>(.*?)<\/span>/g, "$1");

  const handleContentChange = (newContent: string, fileName: string) => {
    const clean = sanitize(newContent);
    setFileContents({
      ...fileContents,
      [fileName]: clean,
    });

    const newEdited = new Set(editedFiles);
    newEdited.add(fileName);
    setEditedFiles(newEdited);
  };

  return (
    <VSCodeLayout
      activeTab={activeTab}
      openTabs={openTabs}
      sidebarOpen={sidebarOpen}
      experienceOpen={experienceOpen}
      careerOpen={careerOpen}
      time={time}
      draggedTab={draggedTab}
      fileContents={fileContents}
      editedFiles={editedFiles}
      setActiveTab={setActiveTab}
      setOpenTabs={setOpenTabs}
      setSidebarOpen={setSidebarOpen}
      setExperienceOpen={setExperienceOpen}
      setCareerOpen={setCareerOpen}
      setDraggedTab={setDraggedTab}
      handleContentChange={handleContentChange}
      formatTime={formatTime}
    />
  );
}
