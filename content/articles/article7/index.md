---
title: DISCORD | Monday, 2021-08-23
tags: discord, rust, assemblyscript, staking,
excerpt: Going straight to mainnet to experiment. What's the worst that can happen? Are Gas panics just a bunch of hot air?
createdAt: Monday, 2021-08-23
---
 
<!-- # DISCORD | Monday, 2021-8-23 -->


## Summary of various Discord channels, issues, and topics for a 24 hour period (12am-12am EST)

***
### \#dev-support

#### Question: [(link)](discord://discordapp.com/channels/490367152054992913/542945453533036544/879353572452610138)
- How to use RPC endpoints to monitor multiple accounts? 
#### Answer:
-The NEAR Indexer Framework allows for streams to be captured and indexed in a customized manner. The typical use-case is for this data to make its way to a relational database.
        
- Resources: 
    - Info: https://docs.near.org/docs/tools/near-indexer-framework
    - Tutorial: https://docs.near.org/docs/tutorials/near-indexer
    - Might help: https://github.com/Fayyr-Organization/fayyr-indexer

***
#### Transaction Error Message:[(link)](discord://discordapp.com/channels/490367152054992913/542945453533036544/879376917541838848)
```bash
Transaction Error
{"ActionError":{"index":0,"kind":{"FunctionCallError":{"ExecutionError":"Exceeded the maximum amount of gas allowed to burn per contract."}}}}
```

#### Solution
- Need to add GAS
```bash
    near call prtk4.testnet design --accountId prtk4.testnet --gas=200000000000000
```
***

#### Question:[(link)](discord://discordapp.com/channels/490367152054992913/542945453533036544/879424899121303602)
- How to deploy from repo? 
- Deployed the contract using 
    ``` rust
    near deploy --accountId prtk4.testnet --wasmFile build/release/art-demo.wasm
    ```

- Then ran
    ```bash
        near call prtk4.testnet design --accountId prtk4.testnet
    ```

- Ran into below error
    ```bash
        Failure [prtk4.testnet]: Error: {"index":0,"kind":{"ExecutionError":"Exceeded the prepaid gas."}}
    ```
        
#### Solution
    
#### * Same as previous error 


### ⛽🌮(GAS)
***
#### Question: [(link)](discord://discordapp.com/channels/490367152054992913/542945453533036544/879523234800865390)
- Is this possible to sign a message offchain and then verify this message in Rust smart contract like ecrecover? 
 [(link)](discord://discordapp.com/channels/490367152054992913/542945453533036544/879523234800865390)
#### Answer:
- Yes, It is part of the near-evm package. 
    - You can see an example of it in use here. https://github.com/near/near-evm/blob/4a791b9e9ae80bfc1ef54b1c90028f20f98132e9/tests/contracts/StandardPrecompiles.sol
***

#### Question: [(link)](discord://discordapp.com/channels/490367152054992913/542945453533036544/879561750838644746)
- How can I find my newly deployed tokens? (From example https://github.com/near-examples/FT) fungible_token.wasm was deployed. 
#### Solution:
- you can view the current ft balance of an account by using: 
    ```bash
    near view $ID ft_balance_of '{"account_id": "'bob.$ID'"}' `
- you can transfer tokens to different accounts via: 
    ``` bash
    near call $ID ft_transfer '{"receiver_id": "'bob.$ID'", "amount": "19"}' --accountId $ID --amount 0.000000000000000000000001```
- and then check the balances of the accounts.
    - if still are unable to locate tokens contact wallet support. 
        - https://t.me/NEARSupport
        - https://nearhelp.zendesk.com/

***
# DevRel Office Hours

:::info note
Highlights from the musings that occured during the voice chat. Hope you enjoy!

EVERY WEEKDAY (M-F) from 11AM-12PM PST (6PM - 7PM UTC)
lurkers welcome! :nerd_face:
post your questions in _#devrel-chat-office-hours_
any links mentioned in the chat can be found here the following day as well.
:::



## Highlights

A few links taken out of context from Monday's office hours. Most have to do with finding the most current tutorials. 

- suggested tutorials (up to spec token contracts)
    - https://github.com/Learn-NEAR/NCD-04--art-demo
    - https://examples.near.org/
- Delete an account and set another account as beneficiary of unused coin from deleted account
    - https://docs.near.org/docs/tools/near-cli#near-delete
    - Interested in validation and staking and all that jazz? 
        - [Shards Aliance Discord](discord://discordapp.gg/ZaHCrrG7)
        - https://github.com/near/core-contracts/blob/master/staking-pool/src/lib.rs#L429-L435
        - 
- Running a validator node on mainnet. Unable to withdraw staking funds
  - User thought they were essentially paying for validator seat
  - In reality they were attaching a reserve amount to pay for contract storage of the staking pool they created, which is standard when creating a staking pool.
    - These staking pools are trustless by design, meaning once they are created, no one "owns" them.
    - Attempts to delete the staking pool will throw an error that the contract is holding "too much state".
    - The validator will only be able to withdraw rewards from the staking pool.  
    - Becoming a validator costs roughly 3.5M NEAR.
        - You can raise that amount by convincing others to delegate NEAR to your staking pool.
    - !!!ALWAYS TEST YOUR VALIDATOR STRUCTURE ON TESTNET FIRST!!!

***

## Takeaways
- Multiple GAS issues. What additional information should Gas panic messages have? 
- DevRel Office Hours continues to be a great way to connect NEAR members with the community.
- Always test on testnet first, especially if you are diving into validation, delegating, and staking. Make your mistakes with testnet not real $NEAR!
- The docs are a great resource that update frequently. It's worth subscribing to the repo so you're updated when they are. [docs repo](https://github.com/near/docs)

# JUST 4 DAYS AWAY SIGN UP NOW!

- Did you know that NEAR Foundation offers a bonus for referring someone to their grants program? Make sure the person you're referring mentions you when they apply for the grant. Also, it's never been easier to get funding. :hugging: 

- MetaBUIDL IS THIS WEEK!!!!! It’s our duty to ensure it’s open, secure, and in the power of the people. Time to METABUIDL with NEAR! Share! Retweet! Invite your contacts!

    - 1,000,000 in prizes & funding
    - Aug 27 - Sep 12
    - Open to all online participants. link