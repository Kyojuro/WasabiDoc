(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{242:function(e,a,t){"use strict";t.r(a);var i=t(0),s=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"privacy-and-wasabi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#privacy-and-wasabi"}},[e._v("#")]),e._v(" Privacy and Wasabi")]),e._v(" "),t("details",{attrs:{id:"address-reuse"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#address-reuse","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Address Reuse")])]),e._v(" "),t("p",[e._v("Address reuse refers to the use of the same address for multiple transactions, this is very bad for privacy.\nRead more: "),t("router-link",{attrs:{to:"/using-wasabi/AddressReuse.html"}},[e._v("Address reuse")])],1)]),t("details",{attrs:{id:"anonymity-set-anonset"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#anonymity-set-anonset","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Anonymity Set (anonset)")])]),e._v(" "),t("p",[e._v("The anonymity set is effectively the size of the group you are hiding in during a CoinJoin.\nIt's the quantity of equal value outputs of one CoinJoin transaction.\nRead more: "),t("router-link",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#what-is-the-anonymity-set"}},[e._v("What is the anonymity set?")])],1)]),t("details",{attrs:{id:"block-filters"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#block-filters","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Block filters")])]),e._v(" "),t("p",[e._v("A filter representing a compact list of addresses in one block.\nWasabi checks locally if any block filter contains transactions with addresses of the wallet.\nNo public keys are sent to any third party server, thus it is very private.\nRead more: "),t("router-link",{attrs:{to:"/using-wasabi/BIPs.html#bip-158-compact-block-filters-for-light-clients"}},[e._v("BIP 158: Compact Block Filters for Light Clients")])],1)]),t("details",{attrs:{id:"blockchain-analysis"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-analysis","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Blockchain Analysis")])]),e._v(" "),t("p",[e._v("Blockchain analysis is used by transaction surveillance companies to follow the transaction history of coins.\nTechniques like the common-input-ownership heuristic or change detection are used to create a cluster of transactions belonging to one user.\nRead more: "),t("router-link",{attrs:{to:"/why-wasabi/TransactionSurveillanceCompanies.html#blockchain-analysis"}},[e._v("Blockchain Analysis")])],1)]),t("details",{attrs:{id:"bloom-filter"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#bloom-filter","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Bloom Filter")])]),e._v(" "),t("p",[e._v("A filter used primarily by SPV clients to request only block headers and merkle proofs of a given transaction from full nodes.\nThis is very bad for privacy, as third party servers learn about which addresses you are interested in.\nRead more: "),t("router-link",{attrs:{to:"/using-wasabi/BIPs.html#bip-37-connection-bloom-filtering"}},[e._v("BIP 37: Connection Bloom Filtering")])],1)]),t("details",{attrs:{id:"change-address-detection"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#change-address-detection","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Change Address Detection")])]),e._v(" "),t("p",[e._v("Many Bitcoin transactions have change outputs.\nIt would be a serious privacy leak if the change address can be somehow found, as it would link the ownership of the (now spent) inputs with a new output.\nRead more: "),t("router-link",{attrs:{to:"/using-wasabi/ChangeCoins.html"}},[e._v("Change coins")])],1)]),t("details",{attrs:{id:"chaumian-coinjoin"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#chaumian-coinjoin","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Chaumian CoinJoin")])]),e._v(" "),t("p",[e._v("A Chaumian CoinJoin is a special type of CoinJoin that utilizes Chaumian [or Schnorr] blind signatures to prevent the central coordinator from spying on the linkage between inputs and outputs.\nRead more: "),t("router-link",{attrs:{to:"/using-wasabi/CoinJoin.html#zerolink-protocol-step-by-step"}},[e._v("Use of blind signatures in CoinJoin")])],1)]),t("details",{attrs:{id:"cluster"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#cluster","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Cluster")])]),e._v(" "),t("p",[e._v("Which entities know about which coins.\nFor example, this coin belongs to a cluster that is known by Coinbase and Alice.\nRead more: "),t("router-link",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#what-is-the-cluster-history"}},[e._v("What is the cluster history?")])],1)]),t("details",{attrs:{id:"coinjoin-cj"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#coinjoin-cj","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("CoinJoin (CJ)")])]),e._v(" "),t("p",[e._v("CoinJoin is a trustless method for combining multiple Bitcoin payments from multiple spenders into a single transaction to make it more difficult for outside parties to determine which spender paid which recipient.\nRead more: "),t("router-link",{attrs:{to:"/FAQ/FAQ-Introduction.html#what-is-a-coinjoin"}},[e._v("What is a CoinJoin?")])],1)]),t("details",{attrs:{id:"coinjoined-coins"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#coinjoined-coins","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("CoinJoined coins")])]),e._v(" "),t("p",[e._v("Coins that have successfully participated in a CoinJoin (with the exception of the change) and thus lose their association to a previous cluster.\nRead more: "),t("router-link",{attrs:{to:"/FAQ/FAQ-Introduction.html#what-is-the-privacy-i-get-after-mixing-with-wasabi"}},[e._v("What is the privacy I get after mixing with Wasabi?")])],1)]),t("details",{attrs:{id:"coin-control"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#coin-control","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Coin Control")])]),e._v(" "),t("p",[e._v("Coin control is a must learn if you care about your privacy in Bitcoin.\nAs can be understood from the name, this is a proper control of one's coins.\nRead more: "),t("router-link",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#coin-control-best-practices"}},[e._v("Coin Control Best Practices")])],1)]),t("details",{attrs:{id:"common-input-ownership-heuristic"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#common-input-ownership-heuristic","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Common-Input-Ownership heuristic")])]),e._v(" "),t("p",[e._v("This is a heuristic or assumption which says that if a transaction has more than one input then all those inputs are owned by the same entity.\nRead more: "),t("router-link",{attrs:{to:"/building-wasabi/TechnicalOverview.html#wasabi-wallet-under-the-hood"}},[e._v("Wasabi Wallet under the hood")])],1)]),t("details",{attrs:{id:"coordinator"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#coordinator","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Coordinator")])]),e._v(" "),t("p",[e._v("The coordinator is a server which creates CoinJoins and accepts UTXOs in the mix.\nRead more: "),t("router-link",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#how-does-my-wallet-communicate-with-the-wasabi-coordinator-server"}},[e._v("Wasabi Wallet under the hood")])],1)]),t("details",{attrs:{id:"daemon"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#daemon","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Daemon")])]),e._v(" "),t("p",[e._v("A daemon is a command line interface to run Wasabi without the GUI (Graphical User Interface).\nRead more: "),t("router-link",{attrs:{to:"/using-wasabi/Daemon.html"}},[e._v("Headless Wasabi Daemon")])],1)]),t("details",{attrs:{id:"dust"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#dust","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Dust")])]),e._v(" "),t("p",[e._v("Dust is an UTXO that is uneconomical to spend.\nAlso, small portions of bitcoin can lead to serious consequences for one's privacy, for example the so called "),t("code",[e._v("forced address reuse attack")]),e._v(".\nRead more: "),t("router-link",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#what-is-the-dust-threshold"}},[e._v("What is the dust threshold")])],1)]),t("details",{attrs:{id:"know-your-customer-kyc"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#know-your-customer-kyc","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Know Your Customer (KYC)")])]),e._v(" "),t("p",[e._v("KYC (Know Your Customer) is the process of a business being forced to identify and verify the identity of its clients, and to share this information with a government.\nThe term is also used to refer to the bank regulation which governs these activities.\nRead more: "),t("router-link",{attrs:{to:"/why-wasabi/TransactionSurveillanceCompanies.html#aml-kyc-information"}},[e._v("AML/KYC Information")])],1)]),t("details",{attrs:{id:"label"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#label","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Label")])]),e._v(" "),t("p",[e._v("A way to track who knows about the ownership of your coins.\nNot to be confused with a description of a transaction.\nRead more: "),t("router-link",{attrs:{to:"/using-wasabi/Receive.html#the-importance-of-labeling"}},[e._v("The importance of labeling")])],1)]),t("details",{attrs:{id:"lurking-wife-mode-lwm"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#lurking-wife-mode-lwm","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Lurking Wife Mode (LWM)")])]),e._v(" "),t("p",[e._v("Lurking Wife Mode is a Wasabi feature that hides sensitive and critical information on the wallet itself, which is useful for screenshots.\nRead more: "),t("router-link",{attrs:{to:"/using-wasabi/LurkingWifeMode.html"}},[e._v("Lurking Wife Mode")])],1)]),t("details",{attrs:{id:"pay-to-endpoint-p2ep"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#pay-to-endpoint-p2ep","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Pay to EndPoint (P2EP)")])]),e._v(" "),t("p",[e._v("Pay to EndPoint is sending of bitcoins where the receiver adds one of his own coins as input for a two party CoinJoin.\nRead more: "),t("router-link",{attrs:{to:"/using-wasabi/PayToEndPoint.html"}},[e._v("Pay to EndPoint")])],1)]),t("details",{attrs:{id:"peers"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#peers","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Peers")])]),e._v(" "),t("p",[e._v("Peers in our documentation refers mainly to Bitcoin and Wasabi Wallet users, but it also means people.\nThey are literally peers in the network, or in the CoinJoin.")])]),t("details",{attrs:{id:"rpc"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#rpc","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("RPC")])]),e._v(" "),t("p",[e._v("RPC, or Remote Procedure Call, is an interface to interact with Wasabi Wallet programmatically.\nRead more: "),t("router-link",{attrs:{to:"/using-wasabi/RPC.html"}},[e._v("RPC Interface")])],1)]),t("details",{attrs:{id:"shield-or-anonset-shield"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#shield-or-anonset-shield","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Shield (or anonset shield)")])]),e._v(" "),t("p",[e._v("We often talk about check-mark, green, yellow and red shields... but what are they?\nCoins in your wallet have shields (red, yellow, green and green check-mark).\nEach shield represents the "),t("router-link",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#what-is-the-anonymity-set"}},[e._v("Anonymity Set")]),e._v(" level of a given coin.\nBy the anonymity set levels are "),t("code",[e._v("2")]),e._v(", "),t("code",[e._v("21")]),e._v(" and "),t("code",[e._v("50")]),e._v(", however, this can be "),t("router-link",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#how-can-i-change-the-anonset-target"}},[e._v("changed in the settings")]),e._v(".")],1),e._v(" "),t("p",[e._v("Essentially, when we talk about shields, we mean a specific privacy level set by the user.")])]),t("details",{attrs:{id:"xpub-extended-public-key"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#xpub-extended-public-key","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("XPUB (Extended Public Key)")])]),e._v(" "),t("p",[e._v("An xpub, also know as Extended Public Key, is a part of BIP-32 that will allow you to observe your wallet without the private key (xpriv).\nRead more: "),t("router-link",{attrs:{to:"/why-wasabi/BitcoinPrivacy.html#wasabi-s-solution-4"}},[e._v("Wasabi's Solution")])],1)]),t("details",{attrs:{id:"taint"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#taint","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Taint")])]),e._v(" "),t("p",[e._v("Taint is equivalent to the 'trail' that a Bitcoin transaction leaves during the course of its journey.\nThe taint analysis of a Bitcoin transaction evaluates the association between an address involved in the chain of transactions.\nRead more: "),t("router-link",{attrs:{to:"/why-wasabi/TransactionSurveillanceCompanies.html#blockchain-analysis"}},[e._v("Blockchain Analysis")])],1)]),t("details",{attrs:{id:"the-onion-router-tor"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#the-onion-router-tor","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("The Onion Router (Tor)")])]),e._v(" "),t("p",[e._v("Tor (The Onion Router) is free and open-source software for enabling anonymous communication.\nIt is widely used by Wasabi.\nRead more: "),t("router-link",{attrs:{to:"/FAQ/FAQ-GeneralBitcoinPrivacy.html#how-does-tor-protect-my-network-level-privacy"}},[e._v("How does Tor protect my network level privacy?")])],1)]),t("details",{attrs:{id:"tumbling-tumbler"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#tumbling-tumbler","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Tumbling / Tumbler")])]),e._v(" "),t("p",[e._v("Tumbling is a synonym of 'Mixing'.\nSimilarly, Tumbler is the synonym of 'Mixer'.")])]),t("details",{attrs:{id:"transaction-surveillance-company"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#transaction-surveillance-company","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Transaction Surveillance Company")])]),e._v(" "),t("p",[e._v("A transaction surveillance company is one which attempts to spy on all Bitcoin users.\nTheir business model is usually to sell the data to any government, corporation or individual willing to pay for their services.\nRead more: "),t("router-link",{attrs:{to:"/why-wasabi/TransactionSurveillanceCompanies.html"}},[e._v("Transaction Surveillance Companies")])],1)]),t("details",{attrs:{id:"twoweeks"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#twoweeks","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("#twoweeks")])]),e._v(" "),t("p",[e._v("The #twoweeks is a fun inside joke often used in the Wasabi documentation and, more generally, in the Internet community.\nIn the case of Wasabi documentation, it usually indicates the arrival of a new function or update, to which the future date is still uncertain.")]),e._v(" "),t("p",[e._v('Eg. "Lightning Network is coming to Wasabi in #twoweeks"')])]),t("details",{attrs:{id:"wallet-fingerprinting"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#wallet-fingerprinting","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Wallet fingerprinting")])]),e._v(" "),t("p",[e._v("A careful analyst sometimes deduces which software created a certain transaction, because many different wallet softwares don't always create transactions in exactly the same way.\nRead more: "),t("router-link",{attrs:{to:"/building-wasabi/TechnicalOverview.html"}},[e._v("Technical Overview of Wasabi Wallet")])],1)]),t("details",{attrs:{id:"wasabika"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#wasabika","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("Wasabika")])]),e._v(" "),t("p",[e._v("Wasabikas are builders, users and supporters of Wasabi in general.")])]),t("details",{attrs:{id:"zerolink"}},[t("summary",[t("a",{staticClass:"header-anchor",attrs:{href:"#zerolink","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("h4",[e._v("ZeroLink")])]),e._v(" "),t("p",[e._v("ZeroLink is a framework to holistically design a privacy and fungibility setup for Bitcoin.\nThis encompasses more than just a single CoinJoin transaction, but also includes network level privacy defense against third party spying.")]),e._v(" "),t("p",[e._v("Read more: "),t("router-link",{attrs:{to:"/using-wasabi/CoinJoin.html#zerolink-protocol-step-by-step"}},[e._v("ZeroLink: the Bitcoin Fungibility Framework")])],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);