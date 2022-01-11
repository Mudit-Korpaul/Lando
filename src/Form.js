import { useState } from "react";
import "./Form.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? " buy tabs active-tabs" : "buy tabs"}
          onClick={() => toggleTab(1)}
        >
          Buy
        </button>
        <button
          className={toggleState === 2 ? "sell tabs active-tabs" : "sell tabs"}
          onClick={() => toggleTab(2)}
        >
          Sell
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={
            toggleState === 1 ? "tab-content  active-content" : "tab-content"
          }
        >
          <form action="/">
            <div class="wrapper flex">
              <div class="form-group">
                <input
                  type="number"
                  class="form-control"
                  id="amount"
                  placeholder=" "
                />
                <label for="amount">Buy Amount</label>
              </div>

              <select id="coins" class="form-control form-control-lg">
                <i class="fas fa-caret-down"></i>
                <option>Bitcoin (BTC)</option>
                <option>Ethereum (ETH)</option>
                <option>Binance Coin (BNB)</option>
                <option>Tether (USDT)</option>
                <option>Solana (SOL)</option>
                <option>Cardano (ADA)</option>
                <option>USD Coin (USDC)</option>
                <option>XRP (XRP)</option>
                <option>Terra (LUNA)</option>
                <option>Polkadot (DOT)</option>
              </select>
            </div>

            <div className="cont">
              <div className="gap"></div>
              <div className="int flex">
                <div className="circle">x</div>
                <h2 className="int-content">
                  Crypto Price <i class="fas fa-arrow-right"></i> 12.33 $
                </h2>
              </div>
              <div className="int flex">
                <div className="circle">-</div>
                <h2 className="int-content">
                  Transfer Time <i class="fas fa-arrow-right"></i> 0.5 sec.
                </h2>
              </div>
            </div>
            <div className="trade-method">
              <select id="method" class="form-control form-control-lg">
                <option>Credit/Debit</option>
                <option>PayPal</option>
                <option>Skrill</option>
                <option>Transfer Wise</option>
                <option>Bank Transfer</option>
                <option>Gift Cards</option>
                <option>Bitcoin Cash</option>
                <option>XLM</option>
                <option>Cashapp</option>
                <option>Ezyremitt</option>
              </select>
            </div>
            <button className="btn btn-lg form-btn">Search Offers</button>
          </form>
        </div>

        <div
          className={
            toggleState === 2 ? "tab-content  active-content" : "tab-content"
          }
        >
          <form action="/">
            <div class="wrapper flex">
              <div class="form-group">
                <input
                  type="number"
                  class="form-control"
                  id="amount"
                  placeholder=" "
                />
                <label for="amount">Sell Amount</label>
              </div>

              <select id="coins" class="form-control form-control-lg">
                <option>Bitcoin (BTC)</option>
                <option>Ethereum (ETH)</option>
                <option>Binance Coin (BNB)</option>
                <option>Tether (USDT)</option>
                <option>Solana (SOL)</option>
                <option>Cardano (ADA)</option>
                <option>USD Coin (USDC)</option>
                <option>XRP (XRP)</option>
                <option>Terra (LUNA)</option>
                <option>Polkadot (DOT)</option>
              </select>
            </div>

            <div className="cont">
              <div className="gap"></div>
              <div className="int flex">
                <div className="circle">x</div>
                <h2 className="int-content">
                  Crypto Price <i class="fas fa-arrow-right"></i> 17.34 $
                </h2>
              </div>
              <div className="int flex">
                <div className="circle">-</div>
                <h2 className="int-content">
                  Transfer Time <i class="fas fa-arrow-right"></i> 0.5 sec.
                </h2>
              </div>
            </div>

            <div className="trade-method">
              <select id="method" class="form-control form-control-lg">
                <option>Credit/Debit</option>
                <option>PayPal</option>
                <option>Skrill</option>
                <option>Transfer Wise</option>
                <option>Bank Transfer</option>
                <option>Gift Cards</option>
                <option>Bitcoin Cash</option>
                <option>XLM</option>
                <option>Cashapp</option>
                <option>Ezyremitt</option>
              </select>
            </div>
            <button className="btn btn-lg form-btn">Search Offers</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
