---
title: DISCORD | Wednesday, 2021-08-25
tags: discord, rust, pullrequest, keystore
excerpt: Whassa Fossa? Lessons learned from yolo-ing into a Rust contract. Stats Stat!
createdAt: Wednesday, 2021-08-25
---
 
# DISCORD | Wednesday, 2021-08-25


## Summary of various Discord channels, issues, and topics for a 24 hour period (12am-12am EST)
:::details LAST CALL FOR NEAR [METABUIDL](https://metabuidl.splashthat.com/) HACKATHON!!!

### ! ! ! SIGN UP NOW ! ! !

- Did you know that NEAR Foundation offers a bonus for referring someone to their grants program? Make sure the person you're referring mentions you when they apply for the grant. Also, it's never been easier to get funding. :hugging: 

- MetaBUIDL IS THIS WEEK!!!!! It’s our duty to ensure it’s open, secure, and in the power of the people. Time to METABUIDL with NEAR! Share! Retweet! Invite your contacts!

    - 1,000,000 in prizes & funding
    - Aug 27 - Sep 12
    - Open to all online participants. link

:::
***
### \#dev-support

#### Question: [(link)](discord://discordapp.com/channels/490367152054992913/542945453533036544/880006118573760543)
-   Do I need keyStore to connect to network?
  
-   User is receiving `Cannot read property 'keyStore' ` Error when trying to connect to network [(link)](discord://discordapp.com/channels/490367152054992913/542945453533036544/880011408799064105)



#### Answers:
-   KeyStore is required to _sign_ a transaction. Connecting to the network does not require a keyStore.
    - Example in [connection guide](https://github.com/near/near-api-js/blob/master/examples/quick-reference.md#connect)
-   Suggested implimentation of the code [link](discord://discordapp.com/channels/490367152054992913/542945453533036544/880013244952084511)
    ```javascript
     this.connection = await connect({
      networkId: this.config.networkId,
      nodeUrl: this.config.rpcUrl,
      keyStore: new nearApi.keyStores.InMemoryKeyStore()
    });
    ```
- Although, KeyStore is not required to connect, this type of error has come up, and `near-api-jsv.0.42v` provided a [fix](https://github.com/near/near-api-js/pull/641) for this.
    - Without knowing more about the user's implementation, it's possible they will need to create a new issue and link the [previous issue](https://github.com/near/near-api-js/issues/640) for context.
***

#### Question:
- Will there be a release of an example for the NFT https://examples.near.org/NFT with assembly script?[(link)](discord://discordapp.com/channels/490367152054992913/542945453533036544/880092592698720326)
#### Answer:
- It is being worked on. Stay up to date on it [here](https://github.com/dOrgTech/proof-of-attendance)

***
#### Question, re: FOSSA API key:
- Dev wanted to make a PR to near/docs, but when they submitted their PR, the checks on Travis CI failed:
     ```github
     FATAL Could not initialize 

    TROUBLESHOOTING: A FOSSA API key is needed to run this command.
     ```
    [(PR link)](https://github.com/near/docs/pull/822).
    
#### Answer:
- It is a known issue that is currently being worked on.

***


### DevRel Office Hours

:::info info
Highlights from the musings that occured during the voice chat. Hope you enjoy!

EVERY WEEKDAY (M-F) from 11AM-12PM PST (6PM - 7PM UTC)
lurkers welcome! :nerd_face:
post your questions in _#devrel-chat-office-hours_
any links mentioned in the chat can be found here the following day as well.
:::

A few links taken out of context from Monday's office hours. Most have to do with finding the most current tutorials. 

- Discussion on options for streamlining and reorganizing the Discord channels.
- "upgrading" a ref-finance contract. [(link)](https://github.com/ref-finance/ref-contracts/blob/main/ref-exchange/src/owner.rs)
        - [Specific section](https://github.com/ref-finance/ref-contracts/blob/946f58a216125f8c149853ed9e608ac60368c1cf/ref-exchange/src/owner.rs#L60-L70)
    ```rust
            pub fn migrate() -> Self {
        let contract_v1: ContractV1 = env::state_read().expect("ERR_NOT_INITIALIZED");
        Self {
            owner_id: contract_v1.owner_id,
            exchange_fee: contract_v1.exchange_fee,
            referral_fee: contract_v1.referral_fee,
            pools: contract_v1.pools,
            deposited_amounts: contract_v1.deposited_amounts,
            whitelisted_tokens: UnorderedSet::new(b"w".to_vec()),
        }
    }
    ```
    

***
- And to finished off the days session with team debugging session to help a dev new to Rust connect their frontend and the contract code. 
    * Errors seemed to be thrown from both client and server.
    * suggestsion: call contract from command line to make sure it's working. 
    * use `near-cli`  to call functions on your [contract]( https://docs.near.org/docs/tools/near-cli#contracts)
    
    ```rust 
    $ near call $CONTRACT method `{"key": "value"}` 
    ```
    **Suggestions**
    * Write tests for your contract. 
    * Use VMContext in your test env to simulate account balances, etc.
    * This way you don't have to rebuild/redeploy with every update, and you will save a ton of time.
    * Once you're sure your contract is working _then_ tackle how your front end is wired up.

   
***

#### Highlights


:::details Want to know how you rate in the NEAR community?? 
 
 ##### [stats.gallery](http://stats.gallery/) officially launched!!!

![](https://i.imgur.com/q2v6Hsm.jpg)

![](https://i.imgur.com/TkCFuVT.jpg)

![](https://i.imgur.com/8VkDU29.jpg)

![](https://i.imgur.com/lzXMkRQ.jpg)


:::

## Takeaways
- DevRel is a great place to keep upto date and figure out tech problems. 
- If you are even considering joining MetaBuidl Hackathon... Stop thinking just [sign up now!!](https://metabuidl.splashthat.com/)
- Amazing things are coming soon to NEAR. Keep up to date at NEAR Sighted!


