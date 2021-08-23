---
title: DISCORD | Friday, 2021-08-20
tags: discord, rust, assemblyscript, nft, rainbowbridge, 
excerpt: Choking up talking about mult-sharding. I met NEAR at a rave.
createdAt: 2021-08-20
---
 


## Summary of various Discord channels, issues, and topics for a 24 hour period (12am-12am EST)

:::info
**Note:** We will be focusing our detailing efforts just on **#dev-support** channel activity from now on until more contributors join the NEAR Sighted team :person_doing_cartwheel: :person_doing_cartwheel: :person_doing_cartwheel: 
:::

:::info
**Note:** The "Unanswered Questions" in these summaries don't mean they were _never_ answered, just not on the same date they were posted.
:::
***



## #dev-support

- [Question:](discord://discordapp.com/channels/490367152054992913/542945453533036544/878190558248574987) Is there a direct function to fetch the NEAR transactions associated to an account?
```typescript=
fetch("https://helper.mainnet.near.org/account/" + ACCOUNT_ID + "/activity?limit=100", requestOptions)

// look for result[i].action_kind == "TRANSFER"

```
*** 
- [Question:](discord://discordapp.com/channels/490367152054992913/542945453533036544/878304709893578794) is there a library of types/functions for sputnik dao   
        - [Answer:](https://github.com/near-daos/sputnik-dao-contract/blob/317ea4fb1e6eac8064ef29a78054b0586a3406c3/sputnikdao2/src/types.rs) near-daos repo 
        - dev is looking for sputnik typescript binding. not found yet.


***
- [Question:](discord://discordapp.com/channels/490367152054992913/542945453533036544/877516704278806529) Is there any way that I can create near sub-accounts Programmatically?
    - Only the direct parent account has permission to create a subaccount.
        - Try it out using our near-cli command `near create-account` in your terminal.
    - Check out the [docs](https://docs.near.org/docs/concepts/account#subaccounts) for info on subaccounts.

***
- [Question:](discord://discordapp.com/channels/490367152054992913/542945453533036544/878396552161402970) Is it possible to call a contract without being logged in? Like a publicly available method via JSON RPC?
    - [Answer:](https://docs.near.org/docs/api/naj-cookbook#read-state-without-an-account) Read state without an account. [from cookbook](https://docs.near.org/docs/api/naj-cookbook#read-state-without-an-account)
    ```typescript
    // demonstrates how to query the state without setting
    // up an account. (View methods only)
    const { providers } = require("near-api-js");
    //network config (replace testnet with mainnet or betanet)
    const provider = new providers.JsonRpcProvider("https://rpc.testnet.near.org");

    getState();

    async function getState() {
      const rawResult = await provider.query({
        request_type: "call_function",
        account_id: "guest-book.testnet",
        method_name: "getMessages",
        args_base64: "e30=",
        finality: "optimistic",
      });

      // format result
      const res = JSON.parse(Buffer.from(rawResult.result).toString());
      console.log(res);
    }
    ```



***

## Highlights

 - [Question:](discord://discordapp.com/channels/490367152054992913/542945453533036544/878175319503302656) Data required for syncing `indexer` on testnet. 
     - It is described in README section of Indexer for Explorer [here](https://github.com/near/near-indexer-for-explorer#syncing)

        - Every node (including indexer) has to store entire blockchain state, all block headers and blocks for 5 last epochs (each epoch is 42300 blocks)
            
    #### Inedexer Requirements 
    
    - 200 GB of SSD (current mainnet is ~160 GB)
    - Unfortunately there is nothing you can to to avoid syncing and heavy storage usage.
  - At NEAR we're thinking how to create serverless indexer as a service for users. Though no ETA at the moment.
    
*** 

- [Question:](discord://discordapp.com/channels/490367152054992913/542945453533036544/878322546892738580) can a contract that allows `userA.near` to send NEAR to `userB.near` without the funds going to the account that hosts the contract?
    - [Answer](discord://discordapp.com/channels/490367152054992913/542945453533036544/878390306947604560) Yes, It is possible. 
    ```rust
    use near_sdk::{Promise,env,AccountId}

    pub fn transfer_money(&mut self, account_id: AccountId, amount: f64) {
        Promise::new(account_id).transfer(amount as u128);
    }
    ```
    - Check out `VMContext` in the [docs](https://docs.rs/near-sdk/2.0.1/near_sdk/struct.VMContext.html) 
    - user asked to add this to the `getting started` docs.
    
    - [Folow-up Question:](discord://discordapp.com/channels/490367152054992913/542945453533036544/878377991481213028) Is the following mapping correct?
        ```rust
        env::current_account_id: account id of transaction recipient
        env::signer_account_id: account id of contract owner
        env::predecessor_account_id:  account id of what/who is initiating the transaction/sending funds?
        ```
    - [Follow-up Answer:]() 
        - signer is the originator of the whole transaction 
           - the current account id is the transaction recipient
           - the predecessor is the last account to initiate a transaction
           - In a cross contract call:
           - Dorian calls method to Contract A which then calls a method to Contract B 
           - Dorian is the Signer and predecessor for the first transaction with Contract A 
        - However between Contract A to Contract B (Dorian is the Signer ) (Contract A is the Predecessor)


## DevRel Office Hours:
:::info Office Hours
- (M-F) from 11AM-12PM PST (6PM - 7PM UTC)
- lurkers welcome! :nerd_face: 
- post your questions in _#devrel-chat-office-hours_
  - any links mentioned in the chat can be found here as well.
:::


### Todays topics:

- How do we handle bottle necks with such low gas prices?
    - Dynamic sharding allows for load balancing.
    - Some guilds and core-engs are working with multi-sharding. It's on the way!

- Are there DeFi applications that aren't focused on helping people with money make more money? 
     - this [playlist](https://youtube.com/playlist?list=PLsJWgOB5mIMCMxQVvWAP4xi19EOkHcBNN) on token economics might be inspiring
   - same with this [lecture](https://www.youtube.com/watch?v=E_eWI3AGM-s) on microbonds

- User in Berlin shared his blockchain journey, and said he was introduced to NEAR at an [Electro festival](https://wildemoehrefestival.de/) :man-with-bunny-ears-partying: Thanks EDM!

***


## Unanswered Questions


***
- [Question:](discord://discordapp.com/channels/490367152054992913/542945453533036544/878200667003555870) Are there any browser extension wallets that support NEAR?
   
***
- [Question:](discord://discordapp.com/channels/490367152054992913/542945453533036544/878241753788985424) Is it normal for an NFT to not show up in the "Collectables" section on the testnet wallet? I minted an NFT using the Rust contract example which succeeded, but does not appear in the collectables section:
      
 
***
## Takeaways

- Great community involvment today.
- Where can users find a definitive list of Discord servers / channels?
- NEAR Town Hall is coming up
    - 2021-08-26 : 4PM(PDT)-6PM(PDT) 
    -[Register Now!](https://twitter.com/NEARProtocol/status/1428357084710531077?s=20)
- One reader shared a story they read in the Sputnik Group in Telegram about how a user thought their 10kN was lost, but turns out a little digging into Explorer showed the transaction history.
    - What are the best Explorer guides?
    - Ideas for Explorer walk-throughs / guides / tutorials are welcome


###### tags: `discord` `assemblyscript` `rust` 
