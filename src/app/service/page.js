import { Services } from '@/Component/Project/Service';
import ProjectCard from '@/Component/Project/projectdata/ProjectCards/ProjectCard';
import React from 'react';
import './service.css'
import Link from 'next/link';
import { projectdatas } from '@/Component/Project/projectdata/Projectdata';
const Service = () => {
    return (
        <div className='py-12 max-w-5xl mx-auto '>
            <h1 className='text-xl font-semibold my-5 ml-5 md:ml-0 text-center md:text-start'>My Project</h1>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-3 '>
                {
                    projectdatas.map((item)=><ProjectCard key={item.title} details={item}></ProjectCard>)
                }
            </div>
            <div class="pricing">
            <div class="pricing">
    <h2 class="pricing-title">PRICING</h2>
    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
    <div class='box'>
        <h1 class='box-title'>Basic</h1>
        <div class="box-details">
            <p class="detail"><span class="detail-label">Duration:</span> <time class="detail-value">3 days</time></p>
            <p class="detail"><span class="detail-label">Pages:</span> <span class="detail-value">3 Pages</span></p>
            <p class="detail"><span class="detail-label">Features:</span> <span class="detail-value">Featured, Responsive Design</span></p>
            <p class="detail"><span class="detail-label">Price:</span> <span class="detail-value">$100</span></p>
        </div>
        <button class='purchase-button'><Link href={'/contact'}>PURCHASE NOW</Link></button>
    </div>
    <div class='box'>
        <h1 class='box-title'>Standard</h1>
        <div class="box-details">
            <p class="detail"><span class="detail-label">Duration:</span> <time class="detail-value">7 days</time></p>
            <p class="detail"><span class="detail-label">Pages:</span> <span class="detail-value">6 Pages</span></p>
            <p class="detail"><span class="detail-label">Features:</span> <span class="detail-value">Featured, Responsive Design</span></p>
            <p class="detail"><span class="detail-label">Price:</span> <span class="detail-value">$220</span></p>
        </div>
        <button class='purchase-button'><Link href={'/contact'}>PURCHASE NOW</Link></button>
    </div>
    <div class='box'>
        <h1 class='box-title '>Premium</h1>
        <div class="box-details">
            <p class="detail"><span class="detail-label">Duration:</span> <time class="detail-value">15 days</time></p>
            <p class="detail"><span class="detail-label">Pages:</span> <span class="detail-value">+9 Pages</span></p>
            <p class="detail"><span class="detail-label">Features:</span> <span class="detail-value">Featured, Responsive Design</span></p>
            <p class="detail"><span class="detail-label">Price:</span> <span class="detail-value">$400</span></p>
        </div>
        <button class='purchase-button'><Link href={'/contact'}>PURCHASE NOW</Link></button>
    </div>
    </div>
</div>

</div>

            
        </div>
    );
};

export default Service;