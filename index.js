let nftCollection = [];

function mintNFT(name, description, owner, date) {
    const nft = {
        name: name,
        description: description,
        owner: owner,
        minted_on: date
    };
    nftCollection.push(nft);
}

function listNFTs() {
    console.log("List of the minted NFTs:");
    for (let i = 0; i < nftCollection.length; i++) {
        console.log(nftCollection[i]);
    }
}

function nftslength() {
    return nftCollection.length;
}

mintNFT("CryptoArt", "Digital art piece", "Alice", "2024-01-10");
mintNFT("VirtualLand", "Plot of virtual land", "Bob", "2024-02-15");
mintNFT("GameItem", "Rare in-game item", "Charlie", "2024-03-20");
mintNFT("MusicTrack", "Exclusive music track", "Dave", "2024-04-25");

listNFTs();
console.log(Total Supply: ${nftslength()});
