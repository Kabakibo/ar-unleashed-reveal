
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  // Scroll to top when component mounts to fix navigation issue
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-augify-dark text-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              <span className="text-augify-lime">Terms</span> of Use
            </h1>
            <p className="text-xl text-white/80 mb-10 text-center">
              Last updated on January 15th, 2024
            </p>
            
            <div className="prose prose-lg max-w-none prose-invert">
              <div className="space-y-6">
              <p className="font-bold mb-6">AGREEMENT TO OUR LEGAL TERMS</p>
              
              <p>
                We are 9502-0541 Québec inc. ("Company," "we," "us," "our"), a company registered in Canada, Montreal, Quebec. 
                We operate the mobile application Augify (the "App"), as well as any other related products and services that 
                refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
              </p>
              
              <p>
                Augify mobile app allows you to create (augify) and consume augmented reality experiences. 
                You can contact us by email at Contact@augify.ca.
              </p>
              
              <p>
                These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf 
                of an entity ("you"), and 9502-0541 Québec inc., concerning your access to and use of the Services. 
                You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these 
                Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM 
                USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY. Supplemental terms and conditions or documents 
                that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. 
                We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time. 
                We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right 
                to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms 
                to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, 
                the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
              </p>

              <p>
                The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or 
                register for the Services. We recommend that you print a copy of these Legal Terms for your records.
              </p>
              
              <p className="font-bold my-6">TABLE OF CONTENTS</p>
              <ol className="list-decimal pl-5">
                <li>OUR SERVICES</li>
                <li>INTELLECTUAL PROPERTY RIGHTS</li>
                <li>USER REPRESENTATIONS</li>
                <li>USER REGISTRATION</li>
                <li>PURCHASES AND PAYMENT</li>
                <li>POLICY</li>
                <li>PROHIBITED ACTIVITIES</li>
                <li>USER GENERATED CONTRIBUTIONS</li>
                <li>CONTRIBUTION LICENSE</li>
                <li>GUIDELINES FOR REVIEWS</li>
                <li>MOBILE APPLICATION LICENSE</li>
                <li>SOCIAL MEDIA</li>
                <li>THIRD-PARTY WEBSITES AND CONTENT</li>
                <li>ADVERTISERS</li>
                <li>SERVICES MANAGEMENT</li>
                <li>PRIVACY POLICY</li>
                <li>COPYRIGHT INFRINGEMENTS</li>
                <li>TERM AND TERMINATION</li>
                <li>MODIFICATIONS AND INTERRUPTIONS</li>
                <li>GOVERNING LAW</li>
                <li>DISPUTE RESOLUTION</li>
                <li>CORRECTIONS</li>
                <li>DISCLAIMER</li>
                <li>LIMITATIONS OF LIABILITY</li>
                <li>INDEMNIFICATION</li>
                <li>USER DATA</li>
                <li>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</li>
                <li>CALIFORNIA USERS AND RESIDENTS</li>
                <li>MISCELLANEOUS</li>
              </ol>
              
              <h2 className="mt-8">1. OUR SERVICES</h2>
              <p>
                The information provided when using the Services is not intended for distribution to or use by any person or entity 
                in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would 
                subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose 
                to access the Services from other locations do so on their own initiative and are solely responsible for compliance 
                with local laws, if and to the extent local laws are applicable. The Services are not tailored to comply with 
                industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information 
                Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the 
                Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
              </p>
              
              <h2 className="mt-8">2. INTELLECTUAL PROPERTY RIGHTS</h2>
              <p className="font-semibold">Our intellectual property</p>
              <p>
                We are the owner or the licensee of all intellectual property rights in our Services, including all source code, 
                databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services 
                (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks"). 
                Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights 
                and unfair competition laws) and treaties in the United States and around the world. The Content and Marks are provided 
                in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.
              </p>
              
              <p className="font-semibold">Your use of our Services</p>
              <p>
                Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you 
                a non-exclusive, non-transferable, revocable license to: access the Services; and download or print a copy of any 
                portion of the Content to which you have properly gained access solely for your personal, non-commercial use or 
                internal business purpose.
              </p>

               <p>
                Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: Contact@augify.ca. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying your content.
                We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
              </p> 

               <p>
                Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
              </p>  

                <p className="font-semibold">Your submissions and contributions</p>
              <p>
                Submissions: By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we all own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
              </p>

               <p>
                Contributions: The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality during which you may create, submit, post, display, transmit, publish, distribute, or broadcast content and materials to us or through the Services, including but not limited to text, writings, video, audio, photographs, music, graphics, comments, reviews, rating suggestions, personal information, or other material ("Contributions"). Any Submission that is publicly posted shall also be treated as a Contribution.
You understand that Contributions may be viewable by other users of the Services and possibly through third-party websites.
              </p> 

               <p>
                 When you post Contributions, you grant us a license (including use of your name, trademarks, and logos): By posting any Contributions, you grant us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to: use, copy, reproduce, distribute, sell, resell, publish, broadcast, retitle, store, publicly perform, publicly display, reformat, translate, excerpt (in whole or in part), and exploit your Contributions (including, without limitation, your image, name, and voice) for any purpose, commercial, advertising, or otherwise, to prepare derivative works of, or incorporate into other works, your Contributions, and to sublicense the licenses granted in this section. Our use and distribution may occur in any media formats and through any media channels.
              </p>
              
                
            </div>
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
