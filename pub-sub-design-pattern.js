'use strict'
// PUB-SUB DESIGN PATTERN

/* publish–subscribe is a messaging pattern where senders of messages, called publishers,
 do not program the messages to be sent directly to specific receivers, called subscribers,
 but instead categorize published messages into classes without knowledge of which subscribers, 
 if any, there may be. Similarly, subscribers express interest in one or more classes 
 and only receive messages that are of interest, without knowledge of which publishers, if any, there are.*/

const user = (function(){

	       // AVAILABLE CHANNELS
           const channels = {}

          
          return {

          	   // SUBSCRIBE METHOD

          	   subscribe:function(channel, listener) {

          	   	   // CHECK THE CHANNEL ALREADY EXIST IN CHANNELS LIST
          	   	   if(!channels.hasOwnProperty(channel)){

          	   	   	    // CREATE NEW CHANNEL
          	   	   	    channels[channel] = [];


          	   	   }

          	   	   // PUSH THE LISTENER TO THE CHANNEL AND REFERENCE IT'S POSITION
          	   	   let index = channels[channel].push(listener) -1;

          	   	   // RETURN THE REMOVE METHOD (UNSUBSCRIBE FROM THE CHANNEL)

          	   	     return {

          	   	     	unSubscribe : function(){

          	   	     		// REMOVE THE LISTENER
          	   	     	    delete channels[channel][index];
          	   	     	}
          	   	     }

          	   },

          	   // PUBLISH METHOD

          	   publish : function(channel, newUpdate){

          	   	  // IF CHANNEL DOESN'T EXIST INFORM, NO CHANNEL PRESENT IN THE LIST

          	   	  if(!channels.hasOwnProperty(channel)){
                     
                     console.log("Sorry, no channel available with this name");
          	   	  	 return null
          	   	  }

          	   	  // LOOP THROUGH THE LISTENER ATTACHED TO THE CHANNEL AND FIRE ALL THE LISTENER
          	   	  channels[channel].forEach(function(listener){

          	   	  	 listener(newUpdate !== undefined ? newUpdate : {});
          	   	  })
          	   },


          	  // CREATE NEW CHANNEL

          	  createChannel : function(channelName){
 
          	  	 // CREATE THE NEW CHANNEL IN CHANNELS OBJECT
                 if(channelName){

                 	channels[channelName] = []

                 	return;
                 }

                console.log('you have to provide your channel name')
          	  },

          	 // TO GET ALL AVAILABLE CHANNELS 
             
             getAllChannels : function(){

             	let allChannels = Object.keys(channels);

             	for(let i in allChannels){

             		console.log(allChannels[i]);
             	}
             }


          }

})();


