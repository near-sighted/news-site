---
title: DISCORD | Tuesday, 2021-08-24
tags: discord, dao, sputnik, aurora,
excerpt: Hackawhen?? It's a hard fork life for ref.
createdAt: Tuesday, 2021-08-24
---
 
# NEAR Sighted Discord | Tuesday, 2021-08-24


## Summary of various Discord channels, issues, and topics for a 24 hour period (12am-12am EST)
:::important
###   *JUST 2 DAYS AWAY SIGN UP NOW!*

- [x]  Did you know that NEAR Foundation offers a bonus for referring someone to their grants program? Make sure the person you're referring mentions you when they apply for the grant. Also, it's never been easier to get funding. :hugging: 

- [x] MetaBUIDL IS THIS WEEK!!!!! It’s our duty to ensure it’s open, secure, and in the power of the people. Time to METABUIDL with NEAR! Share! Retweet! Invite your contacts!

    - [x] 1,000,000 in prizes & funding
    - [x] Aug 27 - Sep 12
    - [x] Open to all online participants. [Register Now!](https://metabuidl.splashthat.com/)

:::

***
## \#dev-support

#### Question: [(link)]([link://here](https://discord.com/channels/490367152054992913/542945453533036544/879698868516827176))
- Re: Spunik Dao:
    - " I managed to delegate using sputnik v2 testnet via command line. why is the staking balance not updated on the wallet profile for "chaintyping-test2.sputnikv2.testnet"? "
        #### - Answer: 
        - Sputnik v2 DAO's delegration is based around giving more voting weight. It is not the same as a validator, and so they will not show up in the wallet.


***
#### Question: [(link)](https://discord.com/channels/490367152054992913/542945453533036544/878200667003555870)
- Are there any NEAR browser extention wallets?
    #### - Answer:
    - Yes! check out NarWallet. [(link)](https://www.narwallets.com/help/connect-to-web-app/)

***
#### Question [(link)](https://discord.com/channels/490367152054992913/542945453533036544/879788928301957180)
- "Does Solidity allow template literals?"
    - ex. Dynamically setting a string value.
#### Answer: 
- In Solidity you can not do string interpolation; however, you can concatenate strings. 
- NEAR primarily supports WebAssembly Smart contract developed with Rust and AssemblyScript. Although, Thanks to Project Aurora's EVM you can deploy Solidity Smart contracts as well.  
    - check out the [aurora docs](https://doc.aurora.dev) for more information on that Aurora.    
***
#### ERROR MESSAGE:
#### -  Error ocurred when i'm trying to connect my ledger wallet?
![](https://i.imgur.com/ENaIwx2.jpg)
.
- It is a known issue that is currently being worked on.  
    -  For now trying using Firefox. It seems to only be effecting Chromium based browsers (Chrome, Edge, Brave, Opera). 
    -  You can read ZenDesk's statement [here](https://nearhelp.zendesk.com/hc/en-us/articles/4402452780951-U2F-Device-Ineligible-error-with-Ledger-Nano)

***

#### Question:[(link)](https://discord.com/channels/490367152054992913/542945453533036544/879900761016922202) 

 trying to manually sign and send transactions via near-api-js but I keep getting that `Transaction has expired`


#### Solution
- Check the times the times between transactions. 
    - Transaction over 24 hours from signing with expire.

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

- Topic from DevRel Office Hours (there is a summary of the links on the DevRel page in the NEAR main discord channel)
- Can Sputnik v2 delegate for staking
    - "Delegating" can mean something different in a DAO context. Check their [readme](https://github.com/near-daos/sputnik-dao-contract/tree/feat/enchance-contract-v2-readme)
  
:::details DAO "Delegation"


// https://github.com/near-daos/sputnik-dao-contract/tree/main/sputnikdao2
## Token voting
DAO votes to select some token to become voting token (only can be done once, can't change later).

User flow is next:

-  User's deposit the token into the DAO.
    - They can then choose who to delegate these tokens. It can be to themself or to other users to increase their vote weight.
    - When users vote for proposals, their vote is weighted by all the delegations to them.
- Undelegating will block delegating / withdrawing until one voting period passes.
- Undelegated tokens can be withdrawn by the user.
:::

- User discussed a dAPP called [poolparty](http://poolparty.ar/), and asks how to handle handle rolling back a transfer if it fails.
    - if transaction fails, funds will be returned
    - if a subsequent transaction fails, [`near-runner`](https://github.com/near/runner-js) will help with callbacks
            - Write tests once, run them both on NEAR TestNet and a controlled NEAR Sandbox local environment - GitHub - near/runner-js 
- NEAR Crowd questions may best be answered in their Telegram group - [nearcrowdpublic](https://t.me/nearcrowdpublic) 

-  What dev skills are required for creating a DAO?
    - User shared their recently drafted [proposal](https://docs.google.com/document/d/1Wap33besLo08nPeJ5qiq1ppfQiLTOKHGPl5fAnH9cyg/edit) to bring more African-focused projects on chain, and encourages feedback.  
    -   [Sputnik.fund]( https://www.sputnik.fund/) do have a UI, and you can create a DAO quite easily, but further configurations and certain implementations will likely require developer assistance. Furthermore, [Sputnik.v2](https://v2.sputnik.fund/) is worth looking into as well since it has more features.
       


:::info alert
### Cron Cat is looking for 10 Cron Commanders to grow the adoption of cron and promote awareness, so if you're interested, [here's the link:](https://t.co/aWCN0oktC0) 
:::
***

:::info tips

<!-- ### Tips:  -->

- If two accounts have the same `code_hash`. 
    - It means they have the same contract deployed to both of them. 
- If an account has all 1's as its `code_hash` it means it has no contracts deployed to it.

#### Want to know how to use the Ⓝ token symbol? 
Here you go. It is useful:

```rust 
export const nearSymbol = String.fromCharCode(9411); // Ⓝ
``` 

### Recommended reading:

- [Meta Pool](https://narwallets.github.io/meta-pool)     
- [Sputnik v2 DAO ](https://github.com/alpha-fi/cheddar/tree/sputnikdao2)

:::

:::important update
### Ref Finance (@finance_ref)
#### We are currently adding a new fork for $REF

##### Once completed, all $REF token will be airdropped :parachute: back to the corresponding wallet addresses.

##### All non-$REF tokens have been securely returned to their original wallets :moneybag:

#### More details will be coming soon! :wink: stay up to date -- [@finance_ref](https://twitter.com/finance_ref/status/1430005270386774018)
:::
