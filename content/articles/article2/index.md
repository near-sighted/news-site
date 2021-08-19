---
title: Tuesday - 2021-08-17 - DISCORD
tags: discord, assemblyscript, gas, indexer
excerpt: DevRel announces Office Hours! Ref.Finance gets hacked
createdAt: 2021-08-17
---
 


## Summary of various Discord channels, issues, and topics for a 24 hour period (12am-12am EST)

:::info
**Note:** We will be focusing our detailing efforts just on **#dev-support** channel activity from now on until more contributors join the NEAR Sighted team :person_doing_cartwheel: :person_doing_cartwheel: :person_doing_cartwheel: 
:::

:::info
**Note:** The "Unanswered Questions" in these summaries don't mean they were _never_ answered, just not on the same date they were posted.
:::



### \#dev-support

  - [near-api-js Error with cli calls working but getting errors on the frontend.](https://discord.com/channels/490367152054992913/542945453533036544/876874330036903936)
    - the [docs](https://docs.near.org/docs/api/naj-quick-reference#call-contract) have a great reference for basic usage of  near-api-js . 
    - Basically, your first argument in your contract method is an object that's either empty or containing required parameters. 
    - Gas is your second argument and it's in yoctoⓃ (10^24 ). 
    - Finally, you have an optional 3rd argument, also in  yoctoⓃ that's the deposit. 
    - ```typescript
      await contract.method_name(
        {
          arg_name: "value", // argument name and value - pass empty object if no args required
        },
        300000000000000, // attached GAS (optional)
        1000000000000000000000000 // attached deposit in yoctoNEAR (optional)
      );
      ```
  
        
  - **Unanswered questions**

    - [explorer - Issue with "Not Started" status for 10 days](https://discord.com/channels/490367152054992913/542945453533036544/877062155797671937)
    
    - [ indexer - 2 part question:](discord://discordapp.com/channels/490367152054992913/542945453533036544/877090086443954216)
      - "Do we have nodejs library for near indexer, i only found rust version for it?" 
      - "Could I only monitor the states of some specified contracts with indexer?"


    - [AS - Contract throwing error: "WebAssembly trap: memory out of bounds trap"](discord://discordapp.com/channels/490367152054992913/542945453533036544/877258365053595648)

    
    - [AS - User having issues after 'yarn && yarn asbuild' getting the following error](discord://discordapp.com/channels/490367152054992913/542945453533036544/877041122332012575)




### \#support
  - [wallet - Wallet not displaying account](discord://discordapp.com/channels/490367152054992913/765606694125436948/877587476749905983) 
    - user directed to zendesk.
    - user wanted to continue debugging, but suggested error was related to SSL protocol.
    - user asked to post solutions and further concerns in #dev-support and #near-wallet-dev


  - ["Does NEAR have any DEXs in which I can sell near for USDC or ETH and then bridge to ETH?"](discord://discordapp.com/channels/490367152054992913/765606694125436948/877620094895816704) 
    - pointed to https://app.ref.finance/ 
    - might still be under maintenance from fallout of recent hack.

  - [gas - "How does paying for GAS work for view calls?"](https://discord.com/channels/490367152054992913/542945453533036544/877357927172800513)
    - Although not answered in the thread, this was brought up in DevRel Office Hours
      - view calls _do_ in fact use GAS.
      - Currently, NEAR is fronting the cost of GAS for view calls
      - View calls won't appear in explorer as transactions, because they do not update state, and therefore are not added to the chain.




## Highlights
  - [DevRel office hours were such a success that they will now hold them daily! :trophy: ](discord://discordapp.com/channels/490367152054992913/708307442491981849/877612128486453268)
      - (M-F) from 11AM-12PM PST (6PM - 7PM UTC)
      - lurkers welcome! :nerd_face: 
      - new channel, _#devrel-chatski_, added.
          - post your questions for the office hours team to answer live.
          - any links mentioned in the chat can be found here as well.

  - [discussion and confirmation majority of the time 'you should use context.predecessor and not sender'](discord://discordapp.com/channels/490367152054992913/542945453533036544/877216978308325427)



  - **Errors**
  
    - Here's a summary of a user who posted their issue, and, later, their solution.  
      - [AS - User having issues after 'yarn && yarn asbuild' getting the following error](discord://discordapp.com/channels/490367152054992913/542945453533036544/877041122332012575)
      
        - ```typescript
          ERROR TS2304: Cannot find name 'null'.

            valueOf(): null {
                        ~~~~
          in assembly/JSON.ts(264,14)
          ```
        - tried to fix it with: 
        - ```typescript
          vote.map_participants_voted.contains(userId)
          ``` 
        - the problem. 
          - `vote.map_participants_voted` is declared like: `public map_participants_voted: PersistentMap<UserId, bool>;` and UserId is just a string type.

        - user's working solution:
          - `Solution simply create a new object to interact with `

     

## Takeaways
- Syntax errors seem to be most common especially with AS users. 
  - There is a sense that AS should "behave" more like javascript since it looks and _feels_ like it.
  - AS has no event loop, and is _very_ limited in what it has available to the user.
    - New devs coming from javascript often struggle with this concept and the runtime of a `wasm`. What is the future of AssemblyScript - the little javascript dialect that could.
- Frequent wallet issues come up, and are mostly directed to zendesk.
  - For devs, #near-wallet-dev is a great channel to check for wallet updates, and to reach members of the wallet team.


