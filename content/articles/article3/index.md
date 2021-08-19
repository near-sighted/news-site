---
title: Wednesday - 2021-08-18 - DISCORD
tags: discord, rust, assemblyscript, aurora, rainbowbridge, humanman, multitoken
excerpt: DevRel Office Hours day 2! Chron jobs on the blockchain?! MultiToken meeting open to comments. Sim testing in TypeScript with `near-runner`
createdAt: 2021-08-18
---
 


## Summary of various Discord channels, issues, and topics for a 24 hour period (12am-12am EST)

:::info
**Note:** We are focusing our detailing efforts just on **#dev-support** channel activity right now until more contributers join the NEAR Sighted team :person_doing_cartwheel: :person_doing_cartwheel: :person_doing_cartwheel: 
:::

:::info
**Note:** The "Unanswered Questions" in these summaries don't mean they were _never_ answered, just not on the same date they were posted.
:::


### \#dev-support
- [AS - Contract throwing error: "WebAssembly trap: memory out of bounds trap"](discord://discordapp.com/channels/490367152054992913/542945453533036544/877409739632443402) 
    - Most likely related to how storage collections are being used in the contract
     - User relayed that their fix was indeed related to how they were handling storage collections in their classes
        - Unclear of the specifics of their issue, but creating a new object seemed to be part of the solution.

- [2 questions related to scheduling events (chron jobs) on the blockchain ](discord://discordapp.com/channels/490367152054992913/542945453533036544/877485515291648000)
    - `@Trevor | Croncat,Alias,Pingbox` created a tool called [**croncat**](https://docs.cron.cat/) that does exactly that!

- [Confusion about Integer Comparison (u32, i32)](discord://discordapp.com/channels/490367152054992913/542945453533036544/877530107344982026)
    - _Both_ integers must be either signed or unsigned

- [AS - How can a contract keep track of its balance?](discord://discordapp.com/channels/490367152054992913/542945453533036544/877538661208588299)
    - It can't since that information isn't collected when the contract compiles into a `wasm` 
        - checking balance is a view function
        - view functions simply read`wasm` files.
        - if the balance changes without some way to update the contract state (recompiling `wasm` file) then the view function to check the balance will not be accurate        
    - More information on what is available at runtime can be found at [near/NEPs](https://github.com/near/NEPs/blob/master/specs/RuntimeSpec/Components/BindingsSpec/ContextAPI.md)

- [create-near-app - How to prevent full access request when signing in](discord://discordapp.com/channels/490367152054992913/542945453533036544/877601113296240701)
    - user was logging into their app with the same account their contract was deployed on.
        - logging into their app with a different account solved their issue.
        - If the contract account id and the signin account id match a full access key is created

- [nft-market contracts - Adding new functionality to `nft_on_approve` to check storage of token "broker" before placing token on market](discord://discordapp.com/channels/490367152054992913/542945453533036544/877587374362726441)

    - Use `Context.signer` instead of `Context.predecessor`, but that may cause other issues down the road.
    - Altering  contracts may lead to unexpected behavior.

- [near-api-js - how to prevent redirect  for transactions that require 0 deposit](discord://discordapp.com/channels/490367152054992913/542945453533036544/877615635448860792)
    - Ryan (@metaphysical) built this cool POC called [near-transaction-manager](https://github.com/mehtaphysical/near-js/tree/main/packages/near-transaction-manager)
        - gives you a little bit more control over creating, signing, and sending transactions (such as bundling and sending multiple transactions at once).
        - If you create the manager with a plain `Account` object, then it won't do the redirect when you send a transaction.

- [near-sdk-as - using `u128` with storage](discord://discordapp.com/channels/490367152054992913/542945453533036544/877685654153224192)
    - needs to be imported:
        - ```typescript
           import { context, u128 } from "near-sdk-as";
          ```
          
- [Is there any etherscan like service available for aurora network ? i am unable to find one.](discord://discordapp.com/channels/490367152054992913/542945453533036544/877686942173630466)
    - directed to _#aurora_ channel which recently posted updates.

- [How to display all tokens an account has?](discord://discordapp.com/channels/490367152054992913/542945453533036544/877743499552907284)
    - take a look at how the latest`near-wallet` [update](https://github.com/near/near-wallet/blob/master/packages/frontend/src/utils/tokens.js) handles it.

        
- **Unanswered questions**:
    - ["Is there any way that I can create near sub-accounts Programmatically?"](discord://discordapp.com/channels/490367152054992913/542945453533036544/877516704278806529)

    - ["Hi devs, can you help me how to un stake my near in the website wallet...""](discord://discordapp.com/channels/490367152054992913/542945453533036544/877566180041310228)
    
    - [AS - delegating $NEAR via `promise_batch_action_stake`](discord://discordapp.com/channels/490367152054992913/542945453533036544/877598666771271720)

    - [Implementing borsh in Python. Request for examples of serialized data types](discord://discordapp.com/channels/490367152054992913/542945453533036544/877607010680590346)

    - [Where to find examples use cases of `MockedBlockchain`](discord://discordapp.com/channels/490367152054992913/542945453533036544/877626291506004018) 



## Highlights
- [DevRel office hours were such a success that they will now hold them daily! :trophy: ](discord://discordapp.com/channels/490367152054992913/708307442491981849/877612128486453268)
    - (M-F) from 11AM-12PM PST (6PM - 7PM UTC)
    - lurkers welcome! :nerd_face: 
    - new channel, _#devrel-chatski_, added.
        - post your questions for the office hours team to answer live.
        - any links mentioned in the chat can be found here as well.

- Most recent [multi-token standards meeting](https://github.com/shipsgold/multi-token-standard-impl/blob/main/meetings/2021-08-17-meeting-notes.md) notes available. 
    - Drop comments in [forum](https://gov.near.org/t/multi-token-standard-discussion/2917/20) or [_#standards_](discord://discordapp.com/channels/490367152054992913/796063453138780210/877676207867559946)
- We can now write simulation tests for contracts using JavaScript / TypeScript with [near-runner](https://www.npmjs.com/package/near-runner)

- **ERRORS**

  - [Rust Errors - validating accountIds with `ValidAccountId`](discord://discordapp.com/channels/490367152054992913/510254340120903684/877631438621651034)
    - ```rust
       error[E0277]: can't compare `std::string::String` with `near_sdk::json_types::ValidAccountId`
       ```
    - remember to convert it to a string
        - use `to_string()`
        - check the [docs](https://docs.rs/near-sdk/2.0.1/near_sdk/json_types/struct.ValidAccountId.html#impl-From%3CValidAccountId%3E)

  - FT/NFT - Don't forget there's a new standard in town -  [NEP-171](https://github.com/near/NEPs/blob/master/specs/Standards/NonFungibleToken/Core.md) and [NEP-141](https://github.com/near/NEPs/blob/master/specs/Standards/FungibleToken/Core.md) 

  - :rainbow: NEAR -> ETH || ETH -> NEAR :clock1: :clock10: :imp: 
      - expect it to take a few hours
      - Check the [Rainbow Bridge Support Telegram](https://t.me/rainbowbridgesupport)

- **Unanswered Questions**

    - [Is there a way to create sub-accounts (subaccount.mainaccount.near) programmatically?](discord://discordapp.com/channels/490367152054992913/804082069268856852/877396292563767336)

     

## Takeaways
- DevRel is really making headway with office hours. Very beneficial just listening to the NEAR team troubleshoot. Special thanks to `@Josh | NEAR` for spearheading.
- Questions like "Is testnet down?" or "Is testnet wallet down?" come up semi-frequently, and might justify creating a testnet status bot for Discord, but that may also add more noise :man-shrugging: 
- Anything we lose _Sight_ of?
   - Please post any feedback for NEAR Sighted here.



