/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs= []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, descr, img) {
    const NFT = {
        Name: name,
        Description: descr,
        Image: img,
    };
    NFTs.push(NFT);
    console.log("\n\nAdded "+ name);
    console.log("\n----------");


}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    let ID = 1;
    for (const NFT of NFTs) {
        console.log("ID: " + ID);
        console.log("Name: " + NFT.Name);         
        console.log("Description: " + NFT.Description);  
        console.log("Image: " + NFT.Image);      
        ID++;
    }
    console.log("\n----------");

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Supply: " + NFTs.length);
}

// call your functions below this line
mintNFT("Tom", "A very Cool guy", "sampleImage.jpg" );
mintNFT("Gab", "A Bad guy", "sampleImage2.jpg" );
mintNFT("Tom", "Just a guy", "sampleImage3.jpg" );
//not a real image directory..
listNFTs();
getTotalSupply();
