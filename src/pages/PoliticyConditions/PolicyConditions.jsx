import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BackgroundVideo2 from '../../components/BackgroundVideo2/BackgroundVideo2';
import "./PolicyConditions.css"


function PolicyConditions() {
  return (
    <>
      <Header />
      <BackgroundVideo2 />
      <div className="policyconditions-container">
        <h1 className="policyconditions-title">Privacy Policy</h1>
        <p className="policyconditions-p">
        Last updated: 01-01-2025
          <br />
          <br />
          At Super Smash Bros Brawl Company, we respect your privacy and are committed to protecting your personal data. This Privacy Policy describes how we collect, use, and protect your information when you use our video game.
        </p>

        <h1 className="policyconditions-title">1. Information We Collect</h1>
        <p className="policyconditions-p">When you play Super Smash Bros Brawl, we may collect the following information:
          <br />
          <br />
          Personal information: Name, email address, age, etc.
          <br />
          <br />
          Usage information: Data about your interaction with the game, such as game statistics, progress, achievements, and preferences.
          <br />
          <br />
          Technical information: Data such as IP address, device type, operating system, browser, and connection details.</p>

        <h1 className="policyconditions-title">2. How We Use Your Information</h1>
        <p className="policyconditions-p">We use the collected information to:
          <br />
          <br />
          Improve and personalize your gaming experience.
          <br />
          <br />
          Send updates, news, and promotions related to the game.
          <br />
          <br />
          Fulfill our legal and service obligations.</p>

        <h1 className="policyconditions-title">3. Sharing Your Information</h1>
        <p className="policyconditions-p">We do not sell, rent, or share your personal information with third parties without your consent, except when necessary to comply with the law or in exceptional circumstances, such as with payment service providers or cloud servers.</p>

        <h1 className="policyconditions-title">4. Security</h1>
        <p className="policyconditions-p">We take reasonable measures to protect your personal data against unauthorized access, loss, or alteration. However, please note that no system is completely secure.</p>

        <h1 className="policyconditions-title">5. Your Rights</h1>
        <p className="policyconditions-p">You have the right to access, correct, or delete your personal data. To do so, please contact us at:
        <br />
        <br />
        subspaceemissary@SSBBcorporation.com.</p>

        <h1 className="policyconditions-title">6. Changes to This Policy</h1>
        <p className="policyconditions-p">We may update this Privacy Policy from time to time. We will notify you of any significant changes through the means available in the game.</p>
      </div>

      <div className="policyconditions-container" id="conditions">
        <h1 className="policyconditions-title">Terms of Sale</h1>
        <p className="policyconditions-p">Last updated: 01-01-2025
        <br />
        <br />
        These Terms of Sale govern the purchase of products, services, or content within the Super Smash Bros Brawl video game. By making a purchase, you agree to the terms and conditions set forth below.</p>

        <h1 className="policyconditions-title">1. Products and Prices</h1>
        <p className="policyconditions-p">The products and content of the game are subject to availability. Prices may vary and are subject to change without prior notice. The final price will be the one displayed at the time of purchase.</p>

        <h1 className="policyconditions-title">2. Payment Methods</h1>
        <p className="policyconditions-p">We accept a variety of payment methods, including credit/debit cards, PayPal, and other electronic payment systems. All payments are processed through secure platforms.</p>

        <h1 className="policyconditions-title">3. Delivery of Digital Products</h1>
        <p className="policyconditions-p">Once a purchase is made, digital products, such as downloadable content (DLC), skins, virtual currencies, or subscriptions, will be available for immediate download or use within the game.</p>

        <h1 className="policyconditions-title">4. Refund Policy</h1>
        <p className="policyconditions-p">No refunds will be accepted once a digital product has been delivered, except in cases where the product is defective or cannot be delivered due to technical issues.</p>

        <h1 className="policyconditions-title">5. Intellectual Property</h1>
        <p className="policyconditions-p">All intellectual property rights related to Super Smash Bros Brawl and its content (including but not limited to graphics, music, codes, and characters) are the property of Super Smash Bros Brawl Company. Unauthorized use of any game content is prohibited.</p>

        <h1 className="policyconditions-title">6. Modifications</h1>
        <p className="policyconditions-p">We reserve the right to modify, suspend, or terminate any part of the products or services offered without prior notice. This includes changes to features, prices, or availability of content.</p>

        <h1 className="policyconditions-title">7. Liability</h1>
        <p className="policyconditions-p">Super Smash Bros Brawl Company will not be liable for direct, indirect, or incidental damages arising from the use of the game, including but not limited to data loss, unauthorized access, or game errors.</p>

        <h1 className="policyconditions-title">8. Governing Law</h1>
        <p className="policyconditions-p">These Terms of Sale will be governed by the laws of the country where Super Smash Bros Brawl Company is headquartered, and any disputes related to purchases in the game will be subject to the jurisdiction of the courts of that locality.</p>
      </div>
      <Footer />
    </>
  );
};

export default PolicyConditions;
