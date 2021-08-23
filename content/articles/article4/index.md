---
title: DISCORD | Thursday, 2021-08-19
tags: discord, rust, assemblyscript, humanman, nft, delegation, validators, staking, 
excerpt: Show me the NEPs! Rate limit? We don't need no stinking rate limits.
createdAt: 2021-08-19
---
<!-- # DISCORD | Thursday, 2021-08-19 -->
 
## Summary of various Discord channels, issues, and topics for a 24 hour period (12am-12am EST)

:::info update
We are focusing our detailing efforts just on **#dev-support** channel activity right now until more contributors join the NEAR Sighted team :person_doing_cartwheel: :person_doing_cartwheel: :person_doing_cartwheel: 
:::

:::info note
The "Unanswered Questions" in these summaries don't mean they were _never_ answered, just not on the same date they were posted.
:::


### \#dev-support
- [near-api-js - Is there any possible way to fetch a contract without a preexisting wallet connection?](discord://discordapp.com/channels/490367152054992913/542945453533036544/877974127707832380)
    - Check out the [cookbooks](https://docs.near.org/docs/api/naj-cookbook#read-state-without-an-account)

- ["Can I accept only particular tokens in smart contract? I want accounts to stake any amount of one fungible token to calculate their vote for voting. Or can I get the balance of that fungible token in particular account in smart contract?""](discord://discordapp.com/channels/490367152054992913/542945453533036544/877990077719015464)

    - That is pretty much exactly what an FT contract does
        - Check out this [figment.io tutorial](https://learn.figment.io/network-documentation/near/tutorials/1-project_overview/2-fungible-token)
            - Remember to use NEP-141 for FT contracts

        - Also look into [sputnik v2 DAO](https://v2.sputnik.fund/)

- [indexer - Does Indexer have an API?](discord://discordapp.com/channels/490367152054992913/542945453533036544/878032979841130556)
    - Download Instance of Indexer for development
    - Check out [Fayyr-Indexer](https://github.com/Fayyr-Organization/fayyr-indexer) project.

- [Rate limit of RPC endpoint](discord://discordapp.com/channels/490367152054992913/542945453533036544/878113859456610325)
    - No rate limit. Go nuts.
        - There will be API keys and an Infura like system in the future... 
        - but for now its free :slight_smile: We're still a newer blockchain.

- **Unanswered questions**:
    - ["When i'm running my tests and deploying contracts, some of the transactions expire which lead to pretty much all my tests failing... Any suggestions?"](discord://discordapp.com/channels/490367152054992913/542945453533036544/877944303039680622) 

    - [AS - Error: Unreachable opcode was executed](discord://discordapp.com/channels/490367152054992913/542945453533036544/878078992505258025)


### DevRel Office Hours

:::info note
Highlights from the musings that occured during the voice chat. Hope you enjoy!
:::


- [How to serialize arguments when querying, e.g. DAO proposals](discord://discordapp.com/channels/490367152054992913/877269573915795456/877985710609686548)

    - base64 encode your JSON
         
        ```typescript
        const args = {
              someArg: 'hello',
              anotherArg: 'whats up'
            };

        const b64Args = Buffer.from(JSON.stringify(args)).toString('base64');
       console.log(b64Args);
       ```
       - atob() ought to work too, but test
       
- AS - How to write NFT contract in AssemblyScript
    - [Check out the NEP-171 Specs](https://nomicon.io/Standards/NonFungibleToken/Core.html)

- Is u128 the standard for integer type for handling $NEAR?
    - yes. It allows for YoctoNear(10 ^24)

- Any sort of websocket for notifications (indexer, explorer)?
    - ETH may have something set up like that

- One user asked for help designing their project that mixes a [typing game](https://zty.pe/) with NFTs, staking, and delegating. Oh my!
    1) User buys an NFT for X amount of N... lets say 10N
    2) App calls Mint NFT on contract A with an attached deposit of 10N
    3) Contract A mints NFT and assigns user as owner
    4) Contract A also calls a staking method on contract B and forwards the attached deposit of 10N
    5) Contract B stakes 10N into a validator pool that is hard coded into the contract 
    6) A chron job calls a method on contract B that will withdraw staking rewards into contract B
    7) Contract B pays out rewards to NFT owners
    
    - User was curious if they could have Rust contracts and AS contracts in the same project, calling eachother
        - yes. Contracts compile to `wasm`, so it makes no difference once they deploy
    


## Highlights


- [Why does a token transfer, account creation, or contract deploy require a Promise? Why schedule these things for the block after the function call rather than do them during the function call itself?](discord://discordapp.com/channels/490367152054992913/855524499755499520/878022609885876245)
    - They need to be scheduled in separate blocks since sender and receiver accounts can be on different shards, and cross-shard communication happens across blocks passing receipts (sort of "internal transactions")

- "After I joined the Near telegram group I got a message from someone saying they are from near messaging me without me posting an issue. is that normal protocol or is that someone pretending to work for Near?"
    - TOTAL scam! NEAR will NEVER DM you first. Report them to the CM or #report-scams channel.

- [NFT - NEP-171 examples ](discord://discordapp.com/channels/490367152054992913/802339281724243978/878366284927098911)
    - intereseting discussion in #near-wallet-dev
        - questions raised whether examples.near.org/NFT follows spec
    - Here are other spec examples, though
        - https://github.com/near-apps/nft-standard
        - https://github.com/near-apps/nft-launcher
        - https://github.com/near-apps/nft-market

    - NOTE: Deviating from NEP standards will result in user issues as your token will not appear in their wallet.

- [Rust SDK Docs](https://www.near-sdk.io/) got freshened up!

     

## Takeaways
- Office Hours have been a great opportunity to connect without the stress. Not just for NEAR teams and the community, but for NEAR teams and other NEAR teams. It's been great to listen to how folks found NEAR.
- "NAJ" refers to near-api-js, and not everyone knows that.
- Anything we lose _Sight_ of?
   - Please post any feedback for NEAR Sighted here.



