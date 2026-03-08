# Shamba Network

## The Decentralized Climate Data Oracle

### Verifiable Earth Observation Data for a Regenerative Economy

**Version 1.0 — March 2026**

---

## Abstract

Over thirty satellite constellations scan the Earth every day. NASA, ESA, NOAA, and JAXA produce petabytes of data on vegetation health, rainfall, soil carbon, fire risk, and land use change. This data could unlock trillions in climate finance. Carbon credits, parametric insurance, green bonds — all of it depends on reliable environmental data.

But almost none of this data reaches the applications that need it.

The voluntary carbon market, on track to grow from $2.5 billion to over $15 billion by 2035, still relies on manual field audits that cost $30–50 per hectare. Parametric insurance could protect the 97% of sub-Saharan African farmers who have no coverage, but it can't scale without a trusted, decentralized way to get climate data into smart contracts. Prediction markets hit $63.5 billion in trading volume in 2025 and face the same problem: they need real-world data that no single party can game.

This is the oracle problem. For climate data, it's still unsolved.

Shamba Network is a decentralized climate data oracle. It's built on an open-source node SDK, packaged as a Docker container and deployed to the cloud. The network has three types of data providers: node operators who process satellite imagery, ground truthers who collect field data with a mobile app, and data validators who bring domain expertise to resolve edge cases. Delegated staking, rewards, and slashing keep everyone honest. Any token holder can earn by backing reliable providers.

The team has spent four years testing this in the field. The oracle has powered parametric insurance for 3,000+ farmers across East Africa, delivered anticipatory cash transfers to drought-affected pastoralists with 75% lower transaction costs and 90% faster settlement, and helped smallholder communities issue their own carbon credits. Shamba was named a CoinDesk Project to Watch, received grants from Chainlink and Gitcoin, graduated from the Outlier Ventures accelerator, and presented at COP28.

Now the project is evolving from a centralized service into a fully decentralized protocol — owned and operated by its community, secured by staking, and governed by its participants.

---

## Table of Contents

1. [The Problem](#1-the-problem)
2. [Why This Matters Now](#2-why-this-matters-now)
3. [The Solution](#3-the-solution)
4. [Architecture](#4-architecture)
5. [The Oracle Node SDK](#5-the-oracle-node-sdk)
6. [Consensus and Aggregation](#6-consensus-and-aggregation)
7. [Tokenomics](#7-tokenomics)
8. [Governance](#8-governance)
9. [Use Cases](#9-use-cases)
10. [Traction and Proof of Impact](#10-traction-and-proof-of-impact)
11. [Ecosystem and Partnerships](#11-ecosystem-and-partnerships)
12. [Recognition and Media](#12-recognition-and-media)
13. [Roadmap](#13-roadmap)
14. [Team](#14-team)
15. [Open Source Commitment](#15-open-source-commitment)
16. [Conclusion](#16-conclusion)
17. [References](#17-references)

---

## 1. The Problem

### 1.1 The climate data gap

Every day, satellites measure vegetation health, track rainfall, estimate soil carbon, detect wildfires, and classify land use. The data is free. It's public. And it's almost entirely unusable by the applications that need it.

Carbon credit markets need Monitoring, Reporting, and Verification (MRV) to prove that carbon has actually been sequestered. Today, that means sending auditors to physically inspect land — $30–50 per hectare, weeks or months of waiting, and completely out of reach for smallholder farmers with less than two hectares. The 1.5 billion smallholder farmers who produce 80% of the world's food? Locked out of carbon markets.

Parametric insurance needs trusted data feeds to trigger automatic payouts when weather thresholds are crossed. But if one company controls the data pipeline, they control whether payouts happen. The whole point of "automatic, trustless payouts" falls apart when the data source itself requires trust.

Prediction markets, climate finance instruments, green bonds, conditional aid — they all need the same thing: reliable, verifiable climate data delivered on-chain.

### 1.2 The oracle problem

The blockchain oracle problem is well-documented. Smart contracts execute exactly as programmed, but they can't access external data on their own. They need oracles to bridge the gap between the real world and the blockchain.

The challenge is trust. Why build a transparent, decentralized financial system on the blockchain if the data feeding it comes from a centralized source?

The Bank for International Settlements put it plainly: "While introducing some degree of centralisation in oracles might boost efficiency, it also means adding trusted parties to a system designed to be trustless."

The consequences aren't theoretical. In 2022, DeFi protocols lost $403.2 million across 41 separate oracle manipulation incidents. By 2025, oracle-related losses had reached $8.8 billion. Every centralized data feed is a single point of failure.

For climate data, the stakes are even higher. When an oracle reports that rainfall has exceeded a threshold, a farmer's loan repayment might be automatically reduced. When it reports that vegetation has declined, pastoralists might receive emergency cash transfers. When it reports soil carbon levels, carbon credits worth millions might be issued.

This data can't depend on a single entity.

### 1.3 The inclusion gap

Fifty million smallholder farmers in Africa cultivate 80% of the continent's food on plots typically smaller than two hectares. Ninety-seven percent of them have no insurance. They face a combined financing gap exceeding $200 billion annually. When climate shocks hit — and they're hitting more frequently — these families have almost no safety net.

Affordable agricultural insurance exists in only 4 of Africa's 54 countries. Just 3% of the continent's farmers have any form of crop insurance.

The technology to change this exists. Satellite data can monitor every farm on Earth. Smart contracts can automate payouts in minutes instead of months. Blockchain makes every transaction transparent and verifiable. But the bridge between satellite data and smart contracts — the oracle — has remained centralized and expensive.

---

## 2. Why This Matters Now

Four trends are converging.

### 2.1 The carbon market is accelerating

The voluntary carbon market is valued at roughly $2.5 billion in 2025 and projected to reach $15 billion by 2035, with some analysts forecasting $47.5 billion. Over 62% of sustainability-focused enterprises are increasing their voluntary offset strategies. New integrity standards from the ICVCM are raising the bar for data quality, making automated, satellite-verified MRV not just preferable but necessary.

Demand for verifiable carbon data is growing faster than the infrastructure to provide it.

### 2.2 Climate disasters are intensifying

The planet was hit by 58 billion-dollar weather disasters in 2024, causing $402 billion in damages. In 2025, there were 55, causing $277 billion. The LA wildfires alone exceeded $60 billion — a record for a single wildfire event.

For smallholder farmers in the Global South, these aren't headline statistics. They're existential threats.

### 2.3 Prediction markets have arrived

Prediction markets grew from $15.8 billion in trading volume in 2024 to $63.5 billion in 2025. Polymarket alone processed $21.5 billion. Combined open interest across major platforms grew from $3.3 billion to nearly $13 billion.

These markets need manipulation-resistant data feeds. Climate events — droughts, floods, fire seasons, crop yields — are natural candidates, but only if the data is decentralized and trustworthy.

### 2.4 DePIN is proving the model

Decentralized Physical Infrastructure Networks (DePIN) reached a combined market cap of $19.2 billion in 2025, up 270% year-over-year. The World Economic Forum projects DePIN will grow to $3.5 trillion by 2028. Projects like Helium (wireless), Grass (data), and Aethir (compute) have shown that decentralized networks of independent operators can deliver real infrastructure at scale using token incentives.

Shamba applies this model to climate data: a decentralized network of node operators, ground truthers, and data validators, all running open-source software, all incentivized by tokens, providing verified Earth observation data on-chain.

---

## 3. The Solution

### 3.1 What Shamba Network is

Shamba Network is a decentralized climate data oracle. It's a permissionless network of three types of independent data providers who source, verify, and deliver Earth observation data to smart contracts.

At its core, it solves a simple problem: how do you get trusted climate data on-chain without trusting any single party?

You trust the network.

### 3.2 Three data provider roles

**Node operators** run the Shamba Oracle Node SDK, a cloud-deployed Docker container that fetches satellite data from public APIs (NASA, ESA, NOAA, JAXA), processes it through open-source analysis pipelines, and delivers computed ecological indicators on-chain. The SDK runs on-demand to keep cloud costs low.

**Ground truthers** use the Shamba mobile app to collect field data — geotagged photos, GPS coordinates, measurements like crop height, soil conditions, tree counts, and species identification. Ground truthing supplements satellite data for use cases like carbon credit verification, biodiversity assessments, and land use validation where remote sensing alone isn't enough.

**Data validators** are domain experts (agronomists, ecologists, carbon analysts, climate scientists) who step in when automated analysis is ambiguous or when satellite data and ground truth conflict. They synthesize multiple data sources and make final determinations on edge cases.

### 3.3 How it works

1. An on-chain application requests climate data. For example: "What is the NDVI vegetation index for this 10km grid in Laikipia County, Kenya, for the past 30 days?"

2. The protocol randomly selects **n** node operators from the staked pool. For requests that need field verification (like carbon credit issuance), **m** ground truthers are also selected. For requests needing expert review, **k** data validators are selected.

3. Each provider independently sources data — nodes fetch satellite imagery, ground truthers collect field measurements, validators review and synthesize — and submits results to their respective aggregation service.

4. Three aggregation services (node, ground truth, validation) process submissions from each provider type. A master aggregation contract combines outputs from all active layers and produces the final result. Accurate providers get rewarded. Anyone who submitted bad data gets slashed, and their delegators get slashed too.

5. The verified data is now on-chain, immutable and publicly auditable. It can trigger insurance payouts, validate carbon credits, settle prediction markets, or power any other climate-linked application.

No single provider controls the outcome. No centralized server can be compromised.

### 3.4 Mission

Shamba Network exists to help land stewards — particularly smallholder farmers — by:

- Enabling them to create impact credits (carbon, eco, biodiversity)
- Making climate insurance parametric, automated, and affordable
- Opening access to climate finance, green bonds, and microloans
- Supporting regeneration of agricultural land through satellite-verified sustainable practices
- Making carbon removal and biodiversity protection measurable and monetizable

Every technical decision in the protocol — from the affordable cloud-deployed SDK to the delegated staking model — is in service of this mission.

---

## 4. Architecture

### 4.1 System overview

```
                    SHAMBA NETWORK ARCHITECTURE

    ┌─────────────────────────────────────────────────────┐
    │               DATA SOURCES                           │
    │   Satellite: NASA · ESA · NOAA · JAXA (30+ DBs)    │
    │   Field: Shamba Mobile App (photos, GPS, measures)  │
    │   Expert: Domain specialist assessments              │
    └────────────────────┬────────────────────────────────┘
                         │
                         ▼
    ┌─────────────────────────────────────────────────────┐
    │            THREE DATA PROVIDER TYPES                  │
    │   (All require staking · Support delegated staking)  │
    │                                                      │
    │   NODE OPERATORS     GROUND TRUTHERS   DATA VALIDATORS
    │   (Cloud SDK)        (Mobile App)      (Expert Review)
    │   Fetch satellite    Capture photos,   Review edge
    │   data, compute      GPS, field        cases, synthe-
    │   indicators         measurements      size sources
    └──┬──────────────────┬──────────────────┬────────────┘
       │                  │                  │
       ▼                  ▼                  ▼
    ┌──────────┐  ┌──────────────┐  ┌──────────────┐
    │  NODE    │  │ GROUND TRUTH │  │ VALIDATION   │
    │  AGGR.   │  │ AGGR.        │  │ AGGR.        │
    │  SERVICE │  │ SERVICE      │  │ SERVICE      │
    └────┬─────┘  └──────┬───────┘  └──────┬───────┘
         └───────────────┼─────────────────┘
                         ▼
    ┌─────────────────────────────────────────────────────┐
    │         MASTER AGGREGATION CONTRACT                   │
    │   - Combines outputs from all active layers          │
    │   - Produces final verified data                     │
    │   - Rewards accurate providers + delegators          │
    │   - Slashes bad actors + their delegators            │
    └────────────────────┬────────────────────────────────┘
                         │
                         ▼
    ┌─────────────────────────────────────────────────────┐
    │           PROTOCOL SMART CONTRACTS                   │
    │                                                      │
    │   Staking &        Delegated       Governance        │
    │   Slashing         Staking         Contract          │
    │   Contract         Contract                          │
    │                                    Credibility       │
    │   - Provider       - Community     Scoring &         │
    │     staking          backing       Ranking           │
    │   - Rewards        - Shared                          │
    │   - Penalties        rewards/risk                    │
    └────────────────────┬────────────────────────────────┘
                         │
                         ▼
    ┌─────────────────────────────────────────────────────┐
    │            ON-CHAIN APPLICATIONS                     │
    │                                                      │
    │   Parametric      Carbon        Prediction           │
    │   Insurance       Credits       Markets              │
    │                                                      │
    │   Green           Conditional   Impact               │
    │   Bonds           Aid           Credits              │
    └─────────────────────────────────────────────────────┘
```

### 4.2 Design principles

**Decentralization over efficiency.** Every data point is independently verified by multiple providers across multiple layers. It's slower than a centralized API call, but the data is trustworthy by design, not by reputation.

**Accessibility over exclusivity.** The node SDK runs as an on-demand Docker container in the cloud with minimal cost. Ground truthers participate through a mobile app. Data validators contribute remotely. Students, developers, agronomists, NGOs — anyone can participate in the role that matches their capabilities.

**Open source over proprietary.** Every component is open source. The node SDK, the mobile app, the aggregation contracts, the staking and governance contracts. Anyone can inspect, audit, fork, or improve the code.

**Incentive alignment over enforcement.** The protocol doesn't prevent bad behavior through access control. It makes bad behavior economically irrational through staking and slashing. Honest providers are rewarded. So are the community members who stake with them. Dishonest providers lose their stake. So do their delegators. This creates a natural market for provider credibility.

---

## 5. The Oracle Node SDK

### 5.1 Overview

The SDK is an open-source Docker container designed for cloud deployment. It contains everything needed to operate a node on the network and can be deployed within minutes on any supported cloud platform.

### 5.2 Capabilities

The SDK includes:

Data sourcing modules for NASA MODIS and Landsat (vegetation indices, land surface temperature), ESA Copernicus Sentinel (land monitoring, vegetation health), NOAA atmospheric and weather data, and JAXA Earth observation data. The architecture is extensible so the community can add new data source modules.

A computation pipeline handles NDVI calculation, rainfall monitoring (near real-time, AI-enhanced), soil organic carbon estimation, fire detection, land use classification, and descriptive statistics (max, min, mean, median, variance) for any specified area of interest.

Node operations include automated response to protocol data requests, cryptographic signing of results, staking and reward management, health monitoring and diagnostics, and a CLI interface.

### 5.3 Cloud deployment

The SDK is deployed as a Docker container to cloud platforms. It activates only when needed to serve data requests, so operators pay for compute time only when they're actually working. Cloud deployment means nodes are always online — unlike a laptop that might be closed.

The core team provides the SDK along with deployment guides for a limited number of major cloud platforms at launch. The community will extend support to additional providers over time.

The low barrier is intentional. On-demand cloud execution makes node operation affordable. This is climate data infrastructure for the world, not just for people who can afford dedicated servers.

### 5.4 The Shamba mobile app (ground truthing)

The mobile app handles field-level data collection that supplements and validates satellite data.

It supports geotagged photo capture with automatic GPS, field measurement recording (crop height, soil conditions, tree counts, species identification), structured data collection forms tailored to project types, automatic submission to the Ground Truth Aggregation Service, and a provider dashboard showing staking status, credibility score, and reward history.

Ground truthing is needed for carbon credit verification (soil carbon, tree growth, land use change), biodiversity assessments (species counts, habitat condition), and land use validation where satellite resolution falls short.

Ground truthers are randomly selected per project and use the same token reward and slashing mechanics as node operators.

---

## 6. Consensus and Aggregation

### 6.1 Request flow

When an on-chain application needs climate data, it submits a request specifying the data type (e.g., NDVI, rainfall, soil carbon), geographic area (coordinates or polygon), time period, statistical method, and verification level (which determines which aggregation layers activate).

### 6.2 Provider selection

The protocol randomly selects providers from each required layer. Node operators are always selected for satellite data processing. Ground truthers are selected when the request needs field verification (like carbon credit issuance). Data validators are selected when expert review is needed (like edge cases or conflicting data).

Random selection prevents collusion. No provider knows in advance whether they'll be selected for a given request.

### 6.3 Independent data collection

Node operators independently fetch satellite data from public APIs, process it through the open-source pipeline, compute the result, sign it cryptographically, and submit it to the Node Aggregation Service.

Ground truthers independently travel to the area, collect geotagged photos, GPS coordinates, and measurements using the mobile app, and submit to the Ground Truth Aggregation Service.

Data validators independently review data from both satellite and ground truth layers, apply their domain expertise, and submit their assessment to the Validation Aggregation Service.

Because every node accesses the same public satellite data and runs the same open-source computation, honest nodes should reach the same result. Discrepancies indicate either a bug (which the community can fix) or manipulation (which is punished through slashing).

### 6.4 Multi-layer aggregation

The protocol uses three aggregation layers with a master contract:

Layer 1 (Node Aggregation) collects satellite-derived results from selected nodes, determines consensus within a defined tolerance, and passes the result to the master contract.

Layer 2 (Ground Truth Aggregation) collects field data from selected ground truthers, cross-references it against satellite data, and passes validated field data to the master contract.

Layer 3 (Validation Aggregation) collects expert assessments from selected data validators, synthesizes their determinations, and passes the result to the master contract.

The master aggregation contract combines outputs from all active layers, delivers the final result on-chain, rewards accurate providers, and slashes providers who submitted bad data (along with their delegators).

Not every request activates all three layers. A simple parametric insurance query may only need Layer 1 (satellite data). A carbon credit issuance may need all three. The verification level is specified in the request and determines both cost and thoroughness.

### 6.5 Why this works for climate data

Climate data has several properties that make it well-suited to decentralized verification:

The source data is public and deterministic. Every node accesses the same NASA/ESA/NOAA/JAXA APIs. There's no proprietary data to hide behind.

The computation is reproducible. Given the same inputs and the same open-source pipeline, every node should produce the same output.

The tolerance boundaries are well-defined. Small floating-point variations are normal. Large deviations are either bugs or attacks.

The data has real-world ground truth. Satellite observations can be cross-validated against field measurements, providing a second independent check.

Domain experts can resolve ambiguity. When satellite data and ground truth conflict — due to cloud cover, resolution limits, or unusual conditions — data validators provide the expert judgment needed.

---

## 7. Tokenomics

### 7.1 The Shamba token

The network will have a native token. It does nine things, and five of those directly create buy pressure or reduce selling pressure.

**Staking.** All data providers must stake tokens to be eligible for selection. Staking requirements vary by project: higher-value projects (like large carbon credit issuances) require higher stakes to match the economic security needed.

**Delegated staking.** Any token holder can stake their tokens with a specific data provider. When the backed provider successfully serves data, delegators earn a proportional share of rewards. When the provider is slashed, delegators lose a proportional share too. This gives all token holders a way to earn by putting their tokens to work.

**Rewards.** Providers earn tokens for accurate data delivery. Early participants earn higher rates to bootstrap the network. Tokens are earned through contribution, not through purchase or airdrops.

**Governance.** Token holders vote on protocol decisions (see Section 8).

**Data consumption fees.** Anyone requesting data from the Shamba oracle pays in native tokens. Every API call, every smart contract query, every data feed creates buy-side demand. As network usage grows, so does the constant need to acquire tokens.

**Staking discount.** Data consumers who also stake tokens receive a 10-20% discount on data request fees. This turns one-time buyers into long-term holders: if you're going to use the oracle regularly, it's cheaper to stake and hold than to buy tokens on the spot market each time. It also means consumers have a direct incentive to participate in securing the network, not just consuming from it.

**Fee burn.** 2-5% of every data request fee is permanently burned. As usage scales, the burn rate accelerates and offsets the token emissions from provider rewards. This is the same deflationary mechanism that EIP-1559 brought to Ethereum. At sufficient network volume, the burn can exceed new emissions, making the token net deflationary.

**Premium data tiers.** Historical data archives, higher-resolution feeds, and faster update frequencies are available to token holders above certain thresholds. This isn't staking; it's a holding requirement. Organizations that need deeper data access maintain token positions as an operational cost, creating a stable base of long-term holders who need the token for business reasons.

**Credibility boosting.** Data providers can voluntarily stake above the minimum to increase their credibility score and get selected for requests more frequently. More selections mean more rewards, so high-performing providers have a rational incentive to lock up additional tokens. This creates a competitive dynamic where providers continuously increase their stake to attract more work.

### 7.2 Delegated staking and provider credibility

Because delegators share in both rewards and penalties, rational token holders will only stake with providers who have a good track record.

Every provider has a public credibility score based on: successful requests served, accuracy rate (percentage of submissions matching consensus), uptime/availability, and tenure.

A public ranking dashboard shows all providers sorted by credibility. Higher scores attract more delegated stake, which creates a reinforcing loop: the most reliable providers get the most backing, and overall network data quality keeps improving.

Some projects require more stake than an individual provider can put up. In those cases, providers depend on community members staking with them. This creates a collaborative model where the community collectively secures the network's highest-value data requests.

### 7.3 Token distribution

The token supply is allocated across five categories:

- **Data provider rewards** — the largest allocation, earned by providers for accurate data delivery. This is the primary distribution channel, so value flows to contributors.
- **Community treasury** — funds grants, ecosystem development, bounties, and public goods initiatives.
- **Team and development** — allocated to the founding team and ongoing development, with vesting schedules.
- **Ecosystem partners** — strategic partnerships, integrations, and ecosystem growth.
- **Early investors** — a limited allocation for early supporters who want to help fund development. A waitlist is available for those interested.

The distribution reflects a core principle: value should flow to contributors and believers, not speculators. The investor allocation is deliberately limited. The fee burn mechanism (2-5% of every data request) permanently removes tokens from circulation, offsetting emissions from provider rewards over time.

### 7.4 Economic security

The security model rests on a simple idea: honesty must always be more profitable than manipulation.

Providers who report within consensus earn token rewards. Their delegators earn proportional shares. Providers who report outlier values get slashed, and so do their delegators. The slashing penalty exceeds the potential gain from manipulation.

To manipulate a data point, an attacker would need to control a majority of the randomly selected providers across multiple layers. As the network grows, this gets exponentially more expensive.

All reports, rewards, slashing events, and credibility scores are recorded on-chain, so the track record is public and immutable.

For high-value requests, satellite data (Layer 1), field verification (Layer 2), and expert review (Layer 3) must all agree — making coordinated manipulation across three layers practically impossible.

### 7.5 Design status

The detailed token economics — supply model, emission schedule, staking parameters, delegated staking mechanics, fee burn rate, premium tier thresholds, data consumption pricing, staking discount tiers, and governance thresholds — will be finalized during Phase 1 of development. These parameters will be published in a dedicated Token Economics paper and subjected to simulation and community review before deployment.

---

## 8. Governance

### 8.1 Progressive decentralization

At launch, core technical decisions are made by the founding team to ensure stability and security. Over time, governance authority transfers to the community.

### 8.2 Governance scope

Token holders vote on: data sources (adding or removing supported satellite APIs), protocol parameters (slashing penalties, reward rates, staking requirements, consensus thresholds), protocol upgrades (changes to smart contracts and the SDK), and treasury allocation (directing community funds toward grants, bounties, and public goods).

### 8.3 Governance mechanism

Proposals follow a structured process: community discussion in public forums, formal on-chain proposal with a token deposit, a defined voting period, and execution — either automatic (for parameter changes) or by the development team (for code changes).

---

## 9. Use Cases

### 9.1 Parametric climate insurance

97% of sub-Saharan African farmers are uninsured. Traditional insurance requires expensive claims assessment, takes months to pay out, and doesn't work for small farms.

Shamba delivers verified rainfall, vegetation, and temperature data to smart contracts that automatically trigger payouts when thresholds are crossed. No claims filing, no assessors, no intermediaries. Insurance costs drop by up to 40%.

Already tested: Shamba has powered parametric insurance for 150 cattle herders in northern Kenya (vegetation-triggered) and rainfall insurance embedded in microloans for MSMEs (with Mercy Corps Ventures, BlockBima, and Fortune Credit).

### 9.2 Carbon credits and impact credits

Manual MRV costs $30–50 per hectare, putting it out of reach for 33 million African smallholder farmers.

Shamba continuously monitors soil carbon, vegetation health, and land cover from satellite data. This automated dMRV (decentralized Monitoring, Reporting, and Verification) validates carbon sequestration at a fraction of the cost, making it possible for farms of any size to create and sell carbon credits.

Already tested: Shamba is helping smallholder farmers in Gatanga, Kenya issue carbon credits from organically grown avocado trees, in partnership with YARD NGO. Partnerships with Regen Network (ecocredits) and Thallo (carbon credit marketplace) provide the tokenization and monetization pathways.

### 9.3 Anticipatory cash transfers

Traditional disaster relief arrives after the damage is done. By the time aid reaches communities, livelihoods have been destroyed and families have been displaced.

Shamba monitors ecological conditions and triggers payouts *before* a crisis becomes a catastrophe. When satellite data shows pasture conditions deteriorating toward distress levels, funds are automatically released.

Already tested: In partnership with Mercy Corps Ventures, Fortune Credit, and DIVA Technologies, Shamba powered anticipatory cash transfers to 262 pastoralists across Laikipia and Kajiado counties in Kenya — cutting transaction costs by 75% and settlement time by 90%.

### 9.4 Prediction markets

Climate prediction markets (drought thresholds, rainfall levels, crop failure) need manipulation-resistant data feeds. Shamba's multi-node consensus provides verifiable answers that no single party can game.

### 9.5 Green bonds and climate finance

Green bond issuers need ongoing, verifiable proof that funded projects are delivering environmental outcomes. Shamba provides continuous, satellite-verified monitoring — reforestation progress, soil health, emissions reduction — delivered on-chain as auditable proof of impact.

### 9.6 The pipeline: report, validate, tokenize, monetize

Across all use cases, Shamba creates a unified pipeline:

1. **Report.** 30+ satellite data streams continuously monitor conditions. Ground truthers collect field data where on-the-ground verification is needed.
2. **Validate.** Multiple independent providers across up to three layers verify data and reach consensus through multi-layer aggregation.
3. **Tokenize.** Validated ecological improvements become on-chain assets — ecocredits, carbon credits, impact credits — through partners like Regen Network and Thallo.
4. **Monetize.** Land stewards sell credits on international markets, receive parametric insurance payouts, or access climate finance.

This pipeline turns climate data from passive observation into a financial instrument that directly benefits the communities creating ecological value.

---

## 10. Traction and Proof of Impact

Shamba has been operating as a centralized oracle since 2021. These are documented outcomes from live deployments, not projections.

### 10.1 Impact numbers

| Metric | Result |
|---|---|
| Farmers and land stewards reached | 3,000+ across East Africa |
| Pastoralists receiving anticipatory cash transfers | 262 across Laikipia and Kajiado counties, Kenya |
| Cattle herders insured (northern Kenya) | 150 via vegetation-triggered parametric insurance |
| USDT disbursed to pastoralists (drought pilot) | 11,271 USDT from 20,235 USDT total contributions |
| Transaction cost reduction (vs. traditional systems) | 75% |
| Payment settlement time reduction | 90% |
| Climate insurance cost reduction | Up to 40% |
| Satellite data sources integrated | 30+ databases (NASA, NOAA, ESA, JAXA) |
| Blockchain networks supported | 6 (Arbitrum, Avalanche, Ethereum, Optimism, Polygon, XRPL EVM Sidechain) |
| Web3 ecosystem partners | ~40 |
| Grassroots community partners | 120–130 |
| Target addressable population (Africa) | 33 million smallholder farmers |

### 10.2 Live pilot programs

**Laikipia & Kajiado pastoralist drought insurance (2023)**
Partners: Mercy Corps Ventures, Fortune Credit, DIVA Technologies. 262 pastoralists received anticipatory cash transfers when satellite data confirmed pasture distress. Smart contracts on Polygon held donated funds in escrow, releasing them only when ecological conditions crossed predefined thresholds.

**Northern Kenya cattle herder insurance (2022–2023)**
Partners: Fortune Credit, DIVA Protocol. 150 cattle herders insured via a parametric model. Payments triggered automatically when NDVI vegetation levels fell below starvation-risk thresholds.

**Kenya MSME parametric rainfall insurance (2025)**
Partners: Mercy Corps Ventures, BlockBima, Fortune Credit, RiskShield. Parametric rainfall insurance embedded directly into Fortune Credit's 5-day digital loans for small enterprises. When excess rainfall occurs during the loan period, the insurance automatically reduces repayment. No claims filing required.

**Gatanga carbon credits project (2022–2023)**
Partners: YARD (Youth Action for Rural Development). Smallholder farmers in Gatanga, Kenya are being enabled to issue their own carbon credits from organically grown fruit trees, particularly avocados.

**DIVA Donate conditional donations (2022–2023)**
Partners: DIVA Protocol, Fortune Credit. A blockchain-based conditional donation mechanism where USDT funds were stored in smart contracts on Polygon. Shamba's oracle determined when pastoralist communities were affected by drought and triggered payouts.

---

## 11. Ecosystem and Partnerships

### 11.1 Web3 infrastructure

| Partner | Relationship |
|---|---|
| [Chainlink](https://www.chainlinkecosystem.com/ecosystem/shamba) | Social Impact Grant recipient. [Grant announcement](https://blog.chain.link/shamba-receives-grant-to-bring-climate-data-on-chain/) |
| [Filecoin / IPFS](https://outlierventures.io/portfolio/shamba-network/) | Decentralized storage for MRV data and oracle metadata. Filecoin Base Camp accelerator participant. |
| [DIVA Protocol](https://www.divaprotocol.io/posts/diva-conditional-donations) | Smart contract infrastructure for conditional donations and anticipatory cash transfers on Polygon. |
| [Regen Network](https://regen-network.medium.com/regen-network-launches-strategic-eco-credits-partnership-with-shamba-network-89322192233f) | Strategic partnership to design ecocredits for smallholder farmers, targeting 33 million African farmers. |
| Ripple | Scaling anticipatory cash transfers using Ripple's RLUSD stablecoin. |

### 11.2 Climate finance and development

| Partner | Relationship |
|---|---|
| [Mercy Corps Ventures](https://medium.com/mercy-corps-social-venture-fund/pilot-insights-anticipatory-action-leveraging-blockchain-for-drought-impact-pastoralists-in-the-e2d60d0f0f3d) | Multiple pilot programs for anticipatory cash transfers and parametric insurance in Kenya. |
| Fortune Credit | Kenyan microfinance institution issuing loans with embedded parametric insurance. |
| BlockBima | Web3 climate insurance platform operating parametric smart contracts and risk pools. |
| RiskShield | Risk management partner for the Kenya MSME parametric insurance pilot. |

### 11.3 Carbon markets

| Partner | Relationship |
|---|---|
| Thallo | Farm-based carbon credits on Thallo's blockchain marketplace for the voluntary carbon market. |
| Open Forest Protocol | Geospatial and remote sensing capabilities for forest MRV. |
| dClimate | Bringing sub-Saharan African climate data onto dClimate's decentralized data marketplace. |
| YARD | NGO partner helping Gatanga farming communities issue carbon credits from fruit tree cultivation. |

### 11.4 International expansion

| Partner | Relationship |
|---|---|
| Atlantis DAO | MoU for pilot projects with farmers in rural India. |

### 11.5 Investors and accelerators

| Program | Details |
|---|---|
| Outlier Ventures / Filecoin Base Camp | 12-week accelerator program. Selected from 300+ applicants. |
| Gitcoin Grants | Primary early-stage funding mechanism. Multiple rounds including GR13+, Alpha Round, and DeSci Round. |

---

## 12. Recognition and Media

### 12.1 Awards and recognition

- [CoinDesk Projects to Watch 2023](https://www.coindesk.com/consensus-magazine/2023/04/17/shamba-network-ecological-data-oracle)
- [Chainlink Social Impact Grant recipient](https://blog.chain.link/shamba-receives-grant-to-bring-climate-data-on-chain/)
- [MIT Solve](https://solve.mit.edu/challenges/climate-ecosystems-housing/solutions/61519) — Climate, Ecosystems + Housing challenge and Sustainable Food Systems challenge
- [Gitcoin Impact Case Study](https://impact.gitcoin.co/shamba-network) — "Equipping Smallholder Farmers to Conserve Ecosystems"
- [Outlier Ventures / Filecoin Base Camp](https://outlierventures.io/portfolio/shamba-network/) — selected from 300+ applicants
- [BioCarbon dMRV Working Group](https://biocarbonstandard.com/en/dmrv/) — Kennedy Ng'ang'a is Co-Lead of Workstream 4 (Ground Truthing & Social Verification)
- Polygon Labs featured the [DIVA Donate conditional donation pilot](https://www.divaprotocol.io/posts/diva-conditional-donations)

### 12.2 Conference appearances

| Event | Date | Location | Role |
|---|---|---|---|
| COP28, Hope House Dubai | December 2023 | Dubai, UAE | Fireside chat on dMRV solutions in Africa |
| Sankalp Africa Summit 2024 | February 2024 | Nairobi, Kenya | Opening plenary, main stage (Day 2). 1,358 delegates, 50+ countries. |
| Kenya Carbon Markets Conference 2024 | March 2024 | Nairobi, Kenya | Panel: Role of dMRV in carbon markets. 200+ participants. |
| Consensus 2023 | April 2023 | Austin, Texas | Featured in CoinDesk's "Projects to Watch 2023" |

### 12.3 Selected media coverage

| Publication | Title |
|---|---|
| CoinDesk | ["Shamba Network Sows the Future of Sustainable Agriculture in Africa"](https://www.coindesk.com/consensus-magazine/2023/04/17/shamba-network-ecological-data-oracle) (Projects to Watch 2023) |
| Yahoo Finance | [Syndication of CoinDesk feature](https://finance.yahoo.com/news/shamba-network-sows-future-sustainable-120859965.html) |
| TechCabal | ["Kennedy Ng'ang'a's blockchain of trust for Kenya's smallholder farmers"](https://techcabal.com/2023/01/18/kennedy-ngangas-blockchain-of-trust-for-kenyas-smallholder-farmers/) |
| InsurTech Digital | ["Blockchain Insurance Tackles Kenya's Climate Credit Crisis"](https://insurtechdigital.com/news/blockchain-insurance-tackles-kenyas-climate-credit-crisis) |
| Carbon Pulse / QCIntel | ["Regen, Shamba want to put African smallholder farms on blockchain"](https://www.qcintel.com/carbon/article/regen-shamba-want-to-put-african-smallholder-farms-on-blockchain-7323.html) |
| AgFunder News | ["Mercy Corps Ventures pilots the blockchain to get cash transfers to communities ahead of climate shock"](https://agfundernews.com/mercy-corps-ventures-pilots-the-blockchain-to-get-cash-transfers-to-communities-ahead-of-climate-shock) |
| Blockchain Reporter | ["Shamba Integrates Chainlink Oracle Technology"](https://blockchainreporter.net/shamba-integrates-chainlink-oracle-technology/) |
| Chainlink Blog | [Official grant announcement](https://blog.chain.link/shamba-receives-grant-to-bring-climate-data-on-chain/) |

### 12.4 Ecosystem profiles

Shamba is listed on [Chainlink Ecosystem](https://www.chainlinkecosystem.com/ecosystem/shamba), [Outlier Ventures Portfolio](https://outlierventures.io/portfolio/shamba-network/), [Gitcoin Grants](https://impact.gitcoin.co/shamba-network), [CB Insights](https://www.cbinsights.com/company/shamba), [Messari](https://messari.io/project/shamba/profile), [VC4A](https://vc4a.com/ventures/shamba-network/), [MIT Solve](https://solve.mit.edu/challenges/climate-ecosystems-housing/solutions/61519), and the [BioCarbon Standard dMRV resources](https://biocarbonstandard.com/en/dmrv/).

---

## 13. Roadmap

### 13.1 What has been built (2021–2025)

| Period | Milestone |
|---|---|
| 2020 | Research begins on bringing geospatial data on-chain |
| 2021 | Shamba Network founded. Chainlink grant received. Gitcoin grants funding secured. |
| 2022 | Oracle deployed on 5 EVM chains. Filecoin Base Camp accelerator. Partnerships with Regen Network, Thallo, dClimate, Open Forest Protocol. First pilot with 150 cattle herders. |
| 2023 | CoinDesk Projects to Watch. Anticipatory cash transfer pilot with 262 pastoralists. Mercy Corps Ventures partnership. COP28 participation. DIVA Donate pilot. |
| 2024 | Kenya Carbon Markets Conference. Sankalp Africa Summit. Pilot results published: 75% cost reduction, 90% faster settlement. |
| 2025 | MSME parametric rainfall insurance pilot with BlockBima. Ripple partnership for scaling. |

### 13.2 Decentralized network development (2026–2027)

| Phase | Timeline | Deliverables |
|---|---|---|
| Phase 1: Design | Oct–Dec 2026 | Token economics design (including delegated staking). Oracle Node SDK v1 (alpha Docker container). |
| Phase 2: Build | Jan–Mar 2027 | Multi-layer aggregation contracts. Staking and delegation contracts. SDK beta. Mobile app alpha. |
| Phase 3: Test | Apr–Jun 2027 | Private testnet with 10–30 node operators. Initial ground truthing pilots. Internal security review. |
| Phase 4: Harden | Jul–Sep 2027 | Public testnet. External security audit. Credibility scoring system. Data validation corps onboarding. |
| Phase 5: Prepare | Oct–Dec 2027 | Mainnet launch preparation. Provider ranking dashboard. Final tokenomics calibration. |
| Phase 6: Launch | Jan–Mar 2028 | Mainnet launch. All three provider types operational. Initial pilot migration. |

### 13.3 Post-launch vision

Scale to 100+ node operators, a global ground truthing network, and a data validation corps. Expand satellite coverage through community-contributed modules. Add cloud platform options via community contributions. Enable climate prediction markets on Shamba data feeds. Expand beyond East Africa to South Asia, Southeast Asia, and Latin America. Launch an impact credit marketplace for tokenized carbon, eco, and biodiversity credits. Integrate with major DeFi protocols for climate-linked financial products.

---

## 14. Team

### Kennedy Ng'ang'a — Founder & CEO

Kennedy Ng'ang'a is a geospatial engineer and climate technologist with over 17 years at the intersection of satellite data, agriculture, and development in Africa.

He studied geospatial engineering at university in Nairobi, then spent 5 years as a geospatial research assistant at the International Centre for Tropical Agriculture (CIAT), working directly with smallholder farmers across East Africa. That field experience gave him a first-hand understanding of the challenges: climate vulnerability, exclusion from financial systems, lack of market access, degrading agricultural land. Several of his own family members are smallholder farmers.

Kennedy has been active in Web3 since 2017 and founded Shamba Network in 2021.

He serves as Co-Lead of Workstream 4 (Ground Truthing & Social Verification) in the BioCarbon Standard dMRV Working Group — an industry body established in October 2025 with Planet 2050 to define how digital MRV technologies should integrate into carbon, biodiversity, and water certification. The working group brings together 20+ experts from technology providers, project developers, verification bodies, rating agencies, and financiers. Its recommendations will directly influence how the voluntary carbon market meets CORSIA and ICVCM standards.

Kennedy has spoken at COP28 in Dubai (fireside chat on dMRV in Africa, alongside Caitlin Moore of Protocol Labs), the Sankalp Africa Summit 2024 (opening plenary, 1,358 delegates from 50+ countries), the Kenya Carbon Markets Conference 2024, and Consensus 2023. He's appeared on the [ReFi Podcast](https://creators.spotify.com/pod/profile/refipodcast/episodes/dMRV-Innovation-for-Climate-Resilience-with-Kennedy-Nganga--S4E7-Regeneration-Nexus-e2q9ad6), [CARBON Copy](https://carboncopy.news/content/features/interview-kennedy-nganga-shamba-network-part-one), [Net Present Value Podcast](https://player.fm/series/net-present-value/shamba-mrv-network-ecological-oracle-kennedy-nganga-gitcoin-climate-solutions), and [Crypto Altruists](https://www.cryptoaltruism.org/blog/crypto-altruism-podcast-episode-in-episode-177-blockchain-powered-anticipatory-cash-transfers-for-climate-shocks).

**LinkedIn:** [Kennedy Ng'ang'a](https://ke.linkedin.com/in/kennedynganga) | **X:** [@KennedyWNganga](https://x.com/kennedywnganga)

### The Shamba team

Shamba operates with a lean, globally distributed team that has sustained the project through four years on approximately $200,000 in total funding, primarily from Gitcoin grants and the Filecoin Base Camp accelerator. The team brings expertise in geospatial engineering, data science, smart contract development, and agricultural development.

The project is supported by ~40 Web3 partners and 120–130 grassroots partners across East Africa.

---

## 15. Open Source Commitment

### 15.1 What is open source

Every component of the protocol will be released under recognized open-source licenses (GNU GPL, MIT, or BSD):

- Oracle Node SDK (Docker container, satellite data modules, computation pipelines, node tools)
- Shamba Mobile App (ground truthing data collection)
- Multi-layer aggregation contracts (node, ground truth, validation, and master aggregation)
- Staking and delegated staking contracts (stakes, rewards, penalties)
- Credibility scoring system (provider performance tracking and rankings)
- Governance contracts
- Protocol management contracts
- All technical documentation, deployment guides, and specifications

### 15.2 Why open source matters

For a climate data oracle, open source isn't optional. It's a trust requirement.

Anyone can inspect the computation pipeline to confirm satellite data is being processed correctly. No black box. Open-source code is auditable by the whole community, not just one company's security team. Bugs get found faster. The barrier to participation is knowledge, not permission. The protocol doesn't depend on one company's continued existence. And you can't democratize access to climate data through proprietary software.

### 15.3 Existing open source work

Shamba has been building in the open since its founding:

- GitHub: [github.com/shamba-network](https://github.com/shamba-network)
- Smart Contract Kit: [shambadynamic/shamba-smartcontractkit](https://github.com/shambadynamic/shamba-smartcontractkit)
- DIVA Middleware: [shambadynamic/Shamba-Diva-Middleware](https://github.com/shambadynamic/Shamba-Diva-Middleware)
- Documentation: [docs.shamba.app](https://docs.shamba.app/en/latest/)
- Sustained through Gitcoin public goods funding from day one — the team of 7 operated for a full year on ~$200,000, primarily from Gitcoin grants

---

## 16. Conclusion

The world doesn't lack climate data. It lacks a way to make that data trustworthy, accessible, and economically useful at a scale that reaches the communities who need it most.

Thirty-plus satellite constellations scan the Earth daily. $2.5 billion flows through voluntary carbon markets each year, growing toward $15 billion. $402 billion in climate disaster damages were recorded in a single year. $200 billion in annual financing gaps leaves 1.5 billion smallholder farmers without financial services. And 97% of sub-Saharan African farmers remain completely uninsured against the climate shocks that threaten their livelihoods.

Shamba has spent four years proving that satellite data can power parametric insurance, carbon credits, and anticipatory aid in the real world. Pastoralists in Laikipia, cattle herders in northern Kenya, smallholder farmers in Gatanga — real people benefiting from climate data delivered on-chain. Transaction costs cut by 75%, settlement times by 90%, insurance costs by 40%.

Now the project is taking the next step: making this infrastructure decentralized, permissionless, and community-owned. A network where economic incentives keep data accurate. Where governance is in the hands of the people who build and use it. Where every line of code is open.

The oracle problem for climate data is not just a technical problem. It's a justice problem. The people most affected by climate change are the least served by climate data infrastructure. Shamba exists to change that — not through charity, but through a protocol that makes environmental stewardship economically rewarding.

If you believe climate data should be verifiable by anyone, controlled by no one, and accessible to everyone — join the network.

**[shamba.network](https://shamba.network)**

---

## 17. References

### Academic and institutional

1. Bank for International Settlements, "The oracle problem and the future of DeFi," BIS Bulletin No. 76, 2022. [Link](https://www.bis.org/publ/bisbull76.pdf)
2. Chainlink, "The Blockchain Oracle Problem," Education Hub. [Link](https://chain.link/education-hub/oracle-problem)
3. S&P Global, "Utility at a cost: Assessing the risks of blockchain oracles." [Link](https://www.spglobal.com/en/research-insights/special-reports/utility-at-a-cost-assessing-the-risks-of-blockchain-oracles)
4. MIT Solve, "Shamba Geospatial Data Oracle," Climate, Ecosystems + Housing Challenge. [Link](https://solve.mit.edu/challenges/climate-ecosystems-housing/solutions/61519)

### Market data

5. Carbon Credits, "Voluntary Carbon Market in 2026: Top Forecasts and What They Mean for Investors." [Link](https://carboncredits.com/voluntary-carbon-market-in-2026-top-forecasts-and-what-they-mean-for-investors/)
6. Yale Climate Connections, "Earth was hit by 55 billion-dollar weather disasters in 2025." [Link](https://yaleclimateconnections.org/2026/01/earth-was-hit-by-55-billion-dollar-weather-disasters-in-2025/)
7. Yahoo Finance, "Prediction Markets Grew 4X to $63.5B in 2025." [Link](https://finance.yahoo.com/news/prediction-markets-grew-4x-63-140103455.html)
8. Stanford Social Innovation Review, "Climate Resilience: Improving the Smallholder Insurance Market in Africa." [Link](https://ssir.org/articles/entry/building_a_stronger_foundation_for_climate_resilience)
9. SCOR, "Bridging the protection gap for African smallholder farmers." [Link](https://www.scor.com/en/expert-views/bridging-protection-gap-african-smallholder-farmers)
10. BlockEden, "The Rise of DePIN: Transforming Idle Infrastructure into Trillion-Dollar Opportunities." [Link](https://blockeden.xyz/blog/2026/02/04/depin-19-billion-breakout-decentralized-infrastructure-enterprise-adoption/)

### Shamba Network coverage

11. CoinDesk, "Shamba Network Sows the Future of Sustainable Agriculture in Africa," April 2023. [Link](https://www.coindesk.com/consensus-magazine/2023/04/17/shamba-network-ecological-data-oracle)
12. TechCabal, "Kennedy Ng'ang'a's blockchain of trust for Kenya's smallholder farmers," January 2023. [Link](https://techcabal.com/2023/01/18/kennedy-ngangas-blockchain-of-trust-for-kenyas-smallholder-farmers/)
13. Chainlink Blog, "Shamba Receives Chainlink Grant to Bring Geospatial Climate Data On-Chain." [Link](https://blog.chain.link/shamba-receives-grant-to-bring-climate-data-on-chain/)
14. Mercy Corps Ventures, "Pilot Insights: Anticipatory Action Leveraging Blockchain for Drought-Impact Pastoralists," 2024. [Link](https://medium.com/mercy-corps-social-venture-fund/pilot-insights-anticipatory-action-leveraging-blockchain-for-drought-impact-pastoralists-in-the-e2d60d0f0f3d)
15. InsurTech Digital, "Blockchain Insurance Tackles Kenya's Climate Credit Crisis." [Link](https://insurtechdigital.com/news/blockchain-insurance-tackles-kenyas-climate-credit-crisis)
16. Gitcoin Impact, "Case Study: Shamba Network." [Link](https://impact.gitcoin.co/shamba-network)
17. Outlier Ventures, "Shamba Network Portfolio." [Link](https://outlierventures.io/portfolio/shamba-network/)
18. Regen Network, "Regen Network launches strategic ecocredits partnership with Shamba Network." [Link](https://regen-network.medium.com/regen-network-launches-strategic-eco-credits-partnership-with-shamba-network-89322192233f)

### Shamba Network publications

19. Shamba Network, "Shamba Integrates Chainlink Oracle Technology to Power Parametric Insurance for Smallholder Farmers," Medium, November 2022. [Link](https://medium.com/@shambanetwork/shamba-integrates-chainlink-oracle-technology-to-power-parametric-insurance-for-smallholder-farmers-ae16a84b9be3)
20. Shamba Network, "Empowering Conditional Donations on the Blockchain: Insights from the DIVA Donate Pilot," Medium, July 2023. [Link](https://medium.com/@shambanetwork/empowering-conditional-donations-on-the-blockchain-insights-from-the-diva-donate-pilot-693142ae0a8a)
21. Shamba Network, "Shamba Network Partners with Mercy Corps Ventures, Fortune Credit, and Diva Technologies," Medium, October 2023. [Link](https://medium.com/@shambanetwork/shamba-network-partners-with-mercy-corps-ventures-fortune-credit-and-diva-technologies-to-boost-865710f303ce)

---

*This whitepaper is a living document and will be updated as the protocol evolves.*

*For the latest information, visit [shamba.network](https://shamba.network).*

*Shamba Network is open source. All code is available at [github.com/shamba-network](https://github.com/shamba-network).*
