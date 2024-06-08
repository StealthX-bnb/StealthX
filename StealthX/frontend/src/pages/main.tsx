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

import { stealthAddress, explorer } from '../utils/constants';

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

          <div className="large-block xcrypt-pane">
            <div className="xcrypt-pane-header">
              <div className="header-item" style={{ alignItems: 'center' }}>
                <div className="header-item header-title">
                  <h1>StealthX</h1>
                </div>
                <button className="arrow">
                  <img src="/static/media/chevron-up.db73441e95588d7d28fe5f265b2c5167.svg" alt="" width="24" />
                </button>
              </div>
            </div>
            <div className="xcrypt-pane-body" style={{ display: 'block' }}>
              <p className="block">Share the StealthX to receive BNB</p>
              <div className="xcrypt-pane-header buttons">
                <div className="block-wide">
                  <p className="label" style={{ textTransform: 'uppercase' }}>StealthX:</p>
                  <p className="label xcrypt-id">XEHf7pkRHvz1RCJgdxVwdGS3RF25Y5HufYvd2r3UHSdfhV2h</p>
                </div>
                <div className="header-item">
                  <button className="hbutton hbutton-lnk" title="Copy link">
                    <span>
                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="copy" className="svg-inline--fa fa-copy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"></path>
                      </svg> COPY
                    </span>
                  </button>
                  <button className="hbutton hbutton-lnk" title="Generate new">
                    <span>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rotate" className="svg-inline--fa fa-rotate" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 0.7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1 24.4-24.4 42.1-53.1 52.9-83.7 5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-0.7H40c-13.3 0-24 10.7-24 24z"></path>
                      </svg> Generate New
                    </span>
                  </button>
                </div>
              </div>
              <div className="line"></div>
              <div className="xcrypt-pane-header">
                <div className="block-wide">
                  <p className="message">After you've shared your ID, make sure to save its key. You'll need the key to withdraw funds. Remember, only share the ID, not the key.</p>
                </div>
                <div className="header-item">
                  <button className="hbutton hbutton-lnk">
                    <span>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="upload" className="svg-inline--fa fa-upload" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path>
                      </svg> Load key
                    </span>
                  </button>
                  <input type="file" style={{ display: 'none' }} />
                  <button className="hbutton hbutton-lnk">
                    <span>
                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="floppy-disk" className="svg-inline--fa fa-floppy-disk" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M48 96V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V170.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H309.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-0.3-0.3-0.5-0.5-0.8-0.8V184c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24V80H64c-8.8 0-16 7.2-16 16zm80-16v80H272V80H128zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"></path>
                      </svg> Save key
                    </span>
                  </button>
                </div>
              </div>
              <div className="xcrypt-pane-header block message" style={{ width: '90%', display: 'none' }}>
                <div className="block-wide error-text" style={{ display: 'none' }}>Incorrect StealthX keyfile</div>
                <div className="block-wide" style={{ display: 'none' }}>Keyfile loaded!</div>
              </div>
            </div>
          </div>
        </AddressProvider>
      </div>
    </section>
  );
}
