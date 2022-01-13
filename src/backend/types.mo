import Buffer "mo:base/Buffer";
import Principal "mo:base/Principal";

module {
  public type UserId = Principal;
  public type ProjectId = Text;

  // general types
  public type Image = [Nat8];
  public type Link = Text;

  public type NewProfile = {
    bio: Text;
    firstName: Text;
    img: Image;
    lastName: Text;
  };

  public type Profile = {
    bio: Text;
    firstName: Text;
    id: UserId;
    img: Image;
    lastName: Text;
  };

  public type NewProject = {
    category: Text;
    coverImg: Image;
    description: Text;
    discordLink: Link;
    goal: Float;
    nftVolume: Nat;
    story: Text;
    tags: [Text]; 
    title: Text;
    twitterLink: Link;
    walletId: Text;
    wetransferLink: Link;
  };

  public type Project = {
    category: Text;
    coverImg: Image;
    description: Text;
    discordLink: Link;
    goal: Float;
    id: ProjectId;
    nftVolume: Nat;
    owner: UserId;
    story: Text;
    tags: [Text];
    title: Text;
    twitterLink: Link;
    walletId: Text;
    wetransferLink: Link;
  };
};
