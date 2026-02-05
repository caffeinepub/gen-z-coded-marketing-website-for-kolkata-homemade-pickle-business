import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type ContactFormSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  module ContactFormSubmission {
    public func compare(c1 : ContactFormSubmission, c2 : ContactFormSubmission) : Order.Order {
      Nat.compare(c1.id, c2.id);
    };
  };

  var currentId = 0;
  let submissions = Map.empty<Nat, ContactFormSubmission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async Nat {
    let submission : ContactFormSubmission = {
      id = currentId;
      name;
      email;
      message;
      timestamp = 0;
    };
    submissions.add(currentId, submission);
    currentId += 1;
    submission.id;
  };

  public query ({ caller }) func getSubmission(id : Nat) : async ContactFormSubmission {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission does not exist") };
      case (?submission) { submission };
    };
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactFormSubmission] {
    submissions.values().toArray().sort();
  };
};
