---
title: DISCORD | Monday, 2021-08-16
tags: discord, rust, assemblyscript
excerpt: DevRel announces Office Hours! Ref.Finance incident
createdAt: 2021-08-16
---

## Summary of various Discord channels, issues, and topics

:::info note
The "Unanswered Questions" in these summaries don't mean they were _never_ answered, just not on the same date they were posted.
:::



### \#dev-support
- [Tutorial](http://5.9.10.113/66251220/how-do-you-send-near-tokens-in-an-assembly-script-contract-using-the-near-sdk-as) users with issues they can't find in docs.
    - [AS - How to send funds from contract account to a receiver account](discord://discordapp.com/channels/490367152054992913/542945453533036544/876727656979234866) 

- [Can Wallet redirect happen in a new tab?](discord://discordapp.com/channels/490367152054992913/542945453533036544/876838526291959918)
    - _No, but experiment with `target` and Vue router_
    
- [near-api-js - Where to add gas in function call to AS contract?](discord://discordapp.com/channels/490367152054992913/542945453533036544/876874330036903936)

    - 
        ```typescript 
        //https://docs.near.org/docs/api/naj-quick-reference#call-contract
        await contract.method_name(
          {
            arg_name: "value", // argument name and value - pass empty object if no args required
          },
          300000000000000, // attached GAS (optional)
          1000000000000000000000000 // attached deposit in yoctoNEAR (optional)
        );
        ```
- [Rust - confusion about Type definitions](discord://discordapp.com/channels/490367152054992913/542945453533036544/876948837003067403)
    - ```rust
       // AccountId is used below as a Type definition.
      // alice() should return TYPE AccountId(defined as String in near_sdk).
      
      fn alice() -> AccountId {...}
      ```

- [near-sdk-as - Issues checking _owner_ is _sender_](discord://discordapp.com/channels/490367152054992913/542945453533036544/876931039598100490)
    - ```typescript
         //use context.predessecor not "owner"
       (context.sender == context.predecessor)
       ```
- [AS - Confusion about gas panic in "view" function that queries a storage collection.](discord://discordapp.com/channels/490367152054992913/542945453533036544/876964304585371688)
    - _storage_ collections use gas for computation and processiong, and are expensive! So research the best one for your use. See [docs](https://docs.near.org/docs/concepts/data-storage)

- **Unanswered questions**:
    - [Resources for minting mass amount of NFTs on Mintbase, and cost associated with it?](discord://discordapp.com/channels/490367152054992913/542945453533036544/876737129185706034)
  
    - [near-api-js - Broadcasting transactions. receiving errors: _Class Action is missing in schema..._](discord://discordapp.com/channels/490367152054992913/542945453533036544/876741298395168809)




### \#support
- Question answered from previous day about DAO capabilities in terms of using Social Tokens.
    - Sputnik v2 has such features, but will require development assistance to get up and running.

- Wallet issues redirected to telegram.
  
- **Unanswered questions**:
    - [hi guys, when this reserved go down?](discord://discordapp.com/channels/490367152054992913/765606694125436948/877014806438236171)
    - [Initial funding not appearing in wallet.](discord://discordapp.com/channels/490367152054992913/765606694125436948/877038951909703741)



### \#near-api-js
- [Is there a way to get the "SuccessValue" for a contract call?](discord://discordapp.com/channels/490367152054992913/817102046725406780/876896694787260489)
    - [is `functionCall` deprecated?](discord://discordapp.com/channels/490367152054992913/817102046725406780/876912112117620766)
        - does `signAndSendTransaction` do the same thing? 




### \#learning
- Can anyone recommend any oracle which is faster then Chainlink I am working on synthetic assets?
    - better suited for #dev-support

- [How can I fund my NEAR wallet's inital deposit without purchasing NEAR directly from an exchange, since they are not supported in the US?](discord://discordapp.com/channels/490367152054992913/804082069268856852/876944911163854899)
    - [OkCoin](https://www.okcoin.com/)
    - Open a NEAR wallet using ETH/Metamask with [paras](https://faucet.paras.id/)
    - "first of all you need to create your wallet, then from okcoin or any exchange you should send tokens to the wallet adress you created"




## Highlights
- [DevRel has Office Hours in #dev-support!](discord://discordapp.com/channels/490367152054992913/494277489779277854/876924173082066974)
    - 12PM - 2PM PST on Tuesdays
    - 9AM - 11AM PST on Fridays
    - [@bucanero offered to translate into spanish!](discord://discordapp.com/channels/490367152054992913/708307442491981849/876940976487276624)
- @BenZ_Near added a bot to #welcome with relevant links. 
- Ref.Finance
  - What happened? - Around 2pm UTC on Aug 15th 2021, the Ref core team noticed unusual behavior with farming pair $REF-$NEAR. 1,000,000 $Ref and 580,000 $Near were affected.
  - What is happening? - An investigation quickly identified a bug in a recently deployed hotfix to the farming contract, which unfortunately was exploited by several users. The ref finance's telegram was flooded with messages. Spammers attacked with harsh words with the current bug abused situation. Near wallets and Wallet Addresses of bug-abusers, token related address was identified the next day. Find the list of the address in here
  - What will happen next? A detailed post-mortem will be update soon from Ref team. Also announced 48 hours deadline for the bug-abuser to return the stolen assess or else the Team will pursue other tough options.
  - Ref.finance updates on [Twitter](https://twitter.com/finance_ref/status/1426649258812448774)





## Takeaways
- Some confusion on **Signed/Unsigned Integers**. Might be a good tutorial on that whole world. 
- Struggles persist with new wallet users creating and transferring to NEAR Wallet.
- DevRel hours are creating some buzz. I think it will be a hit!
