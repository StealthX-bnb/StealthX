import { faArrowRight, faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNetwork } from 'wagmi';
import AddressProvider from '../components/address';
import { Connect } from '../components/connect';
import { XcryptID } from '../components/xcryptid';
import { Network } from '../components/network';
import { Send } from '../components/send';
import { Withdraw } from '../components/withdraw';

import { stealthAddress, explorer } from '../utils/constants';  // تأكد من مسار الاستيراد الصحيح

import './main.css';

export function Main() {
  const [activeTab, setActiveTab] = useState<string>('send');

  const { chain } = useNetwork();
  const contractAddress = stealthAddress[chain?.id || 97 || 5611];
  const explorerAddress = explorer[chain?.id || 97 || 5611];

  return (
    <section className="layout">
      <div className="header">
        <div className="header-content">
          <div className="header-logo">
            <h1 className="text-4xl font-bold text-mint-green-500">StealthX</h1>
          </div>
          <nav className="header-nav">
            <ul>
              <li><a href="#explore">Explore</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </nav>
          <div className="header-wallet">
            <Connect />
          </div>
        </div>
      </div>

      <div className="content">
        <div className="promo-section">
          <div className="promo-content">
            <h1 className="promo-title">
              Experience <span className="promo-highlight design">Seamless</span> and <span className="promo-highlight marketing">Secure</span>
              <br /> BNB Transactions with Anonymous Transfers
            </h1>
            <div className="promo-benefits">
              <div className="promo-item">
                <p className="promo-text">
                  Ensure Complete Privacy with <strong>Untraceable Stealth Addresses</strong>
                </p>
              </div>
              <div className="promo-item">
                <p className="promo-text">
                  Conduct BNB Transactions <strong>Privately and Securely</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <AddressProvider>
          <XcryptID />

          <div className="large-block">
            <div className="nav-tabs">
              <div
                className={activeTab === 'send' ? 'tab active' : 'tab'}
                onClick={() => setActiveTab('send')}
              >
                <h2>
                  <FontAwesomeIcon icon={faArrowRight} />
                  &nbsp; Send
                </h2>
                <span className="super">
                  {chain?.nativeCurrency.symbol || 'BNB'}
                </span>
              </div>
              <div
                className={activeTab === 'withdraw' ? 'tab active' : 'tab'}
                onClick={() => setActiveTab('withdraw')}
              >
                <h2>
                  <FontAwesomeIcon icon={faArrowTurnDown} flip="horizontal" />
                  &nbsp; Receive
                </h2>
                <span className="super">
                  {chain?.nativeCurrency.symbol || 'BNB'}
                </span>
              </div>
            </div>

            <div
              className="pane"
              style={{ display: activeTab === 'send' ? 'block' : 'none' }}
            >
              <Send />
            </div>
            <div
              className="pane"
              style={{
                display: activeTab === 'withdraw' ? 'block' : 'none',
              }}
            >
              <Withdraw />
            </div>
          </div>
        </AddressProvider>
      </div>
    </section>
  );
}
