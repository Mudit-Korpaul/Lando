import { useState } from "react";

import Dropdown from "react-animated-dropdown";
import "./Form.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const cryptos = [
    "Bitcoin (BTC)",
    "Ethereum (ETH)",
    "Binance Coin (BNB)",
    "Tether (USDT)",
    "Solana (SOL)",
    "Cardano (ADA)",
    "USD Coin (USDC)",
    "XRP (XRP)",
    "Terra (LUNA)",
    "Polkadot (DOT)",
  ];

  const [crypto, setCrypto] = useState("");

  const sellCryptos = [
    "Bitcoin (BTC)",
    "Ethereum (ETH)",
    "Binance Coin (BNB)",
    "Tether (USDT)",
    "Solana (SOL)",
    "Cardano (ADA)",
    "USD Coin (USDC)",
    "XRP (XRP)",
    "Terra (LUNA)",
    "Polkadot (DOT)",
  ];

  const [sellCrypto, setSellCrypto] = useState("");

  const methods = [
    "Credit/Debit",
    "PayPal",
    "Skrill",
    "Transfer Wise",
    "Bank Transfer",
    "Gift Cards",
    "Bitcoin Cash",
    "XLM",
    "Cashapp",
    "Ezyremitt",
  ];

  const [method, setMethod] = useState("");

  const sellMethods = [
    "Credit/Debit",
    "PayPal",
    "Skrill",
    "Transfer Wise",
    "Bank Transfer",
    "Gift Cards",
    "Bitcoin Cash",
    "XLM",
    "Cashapp",
    "Ezyremitt",
  ];

  const [sellMethod, setSellMethod] = useState("");

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
              <div class="form-group form">
                <input
                  type="number"
                  class="form-control"
                  id="amount"
                  placeholder=" "
                />
                <label htmlFor="amount">Buy Amount</label>
              </div>

              <Dropdown
                dropdownOptions={cryptos}
                dropdownValue={crypto}
                onChange={(e) => setCrypto(e.target.value)}
                width="250px"
                dropdownPlaceholder="Currency"
                mainFontColor="#8e05c2"
                dropdownFontColor="white"
                // mainBackgroundColor="green"
                dropdownBackgroundColor="#8e05c2"
                optionHoverColor="#700b97"
                fontSize="15px"
                padding="1em 2em -.5em"
                closeOnOutsideClick={true}
              />
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
                <div className="circle">+</div>
                <h2 className="int-content">
                  Transfer Time <i class="fas fa-arrow-right"></i> 0.5 sec.
                </h2>
              </div>
            </div>
            <div className="trade-method">
              <Dropdown
                dropdownOptions={methods}
                dropdownValue={method}
                onChange={(e) => setMethod(e.target.value)}
                width="80%"
                dropdownPlaceholder="Tranfer Method"
                mainFontColor="#8e05c2"
                dropdownFontColor="white"
                // mainBackgroundColor="green"
                dropdownBackgroundColor="#8e05c2"
                optionHoverColor="#700b97"
                fontSize="15px"
                padding="1em 2em -.5em"
                closeOnOutsideClick={true}
              />
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
              <div class="form-group form">
                <input
                  type="number"
                  class="form-control"
                  id="amount"
                  placeholder=" "
                />
                <label for="amount">Sell Amount</label>
              </div>

              <Dropdown
                dropdownOptions={sellCryptos}
                dropdownValue={sellCrypto}
                onChange={(e) => setSellCrypto(e.target.value)}
                width="250px"
                dropdownPlaceholder="Currency"
                mainFontColor="#8e05c2"
                dropdownFontColor="white"
                // mainBackgroundColor="green"
                dropdownBackgroundColor="#8d05c2d8"
                optionHoverColor="#700b97"
                fontSize="15px"
                padding="1em 2em -.5em"
                closeOnOutsideClick={true}
              />
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
                <div className="circle">+</div>
                <h2 className="int-content">
                  Transfer Time <i class="fas fa-arrow-right"></i> 0.5 sec.
                </h2>
              </div>
            </div>

            <Dropdown
              dropdownOptions={sellMethods}
              dropdownValue={sellMethod}
              onChange={(e) => setSellMethod(e.target.value)}
              width="80%"
              dropdownPlaceholder="Tranfer Method"
              mainFontColor="#8e05c2"
              dropdownFontColor="white"
              // mainBackgroundColor="green"
              dropdownBackgroundColor="#8e05c2"
              optionHoverColor="#700b97"
              fontSize="15px"
              padding="1em 2em -.5em"
              closeOnOutsideClick={true}
            />
            <button className="btn btn-lg form-btn">Search Offers</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
