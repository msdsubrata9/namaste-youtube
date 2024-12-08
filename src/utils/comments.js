export const comments = [
  {
    id: 1,
    user: {
      username: "User1",
      avatar: "user1_avatar_url",
    },
    text: "This is the main comment at the top level.",
    timestamp: "2024-12-08T10:00:00Z",
    upvotes: 45,
    downvotes: 2,
    replies: [
      {
        id: 2,
        user: {
          username: "User2",
          avatar: "user2_avatar_url",
        },
        text: "This is a reply to the main comment.",
        timestamp: "2024-12-08T10:10:00Z",
        upvotes: 15,
        downvotes: 0,
        replies: [
          {
            id: 3,
            user: {
              username: "User3",
              avatar: "user3_avatar_url",
            },
            text: "This is a nested reply to User2's reply.",
            timestamp: "2024-12-08T10:20:00Z",
            upvotes: 10,
            downvotes: 1,
            replies: [
              {
                id: 4,
                user: {
                  username: "User4",
                  avatar: "user4_avatar_url",
                },
                text: "This is a deeply nested reply to User3.",
                timestamp: "2024-12-08T10:30:00Z",
                upvotes: 5,
                downvotes: 0,
                replies: [
                  {
                    id: 9,
                    user: {
                      username: "User9",
                      avatar: "user9_avatar_url",
                    },
                    text: "A new level of depth here!",
                    timestamp: "2024-12-08T10:40:00Z",
                    upvotes: 4,
                    downvotes: 0,
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            id: 10,
            user: {
              username: "User10",
              avatar: "user10_avatar_url",
            },
            text: "Another sibling reply to User2.",
            timestamp: "2024-12-08T10:50:00Z",
            upvotes: 7,
            downvotes: 1,
            replies: [],
          },
        ],
      },
      {
        id: 5,
        user: {
          username: "User5",
          avatar: "user5_avatar_url",
        },
        text: "Another reply to the main comment.",
        timestamp: "2024-12-08T10:15:00Z",
        upvotes: 20,
        downvotes: 3,
        replies: [
          {
            id: 11,
            user: {
              username: "User11",
              avatar: "user11_avatar_url",
            },
            text: "Nested reply to User5.",
            timestamp: "2024-12-08T10:55:00Z",
            upvotes: 6,
            downvotes: 2,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    user: {
      username: "User6",
      avatar: "user6_avatar_url",
    },
    text: "This is another top-level comment.",
    timestamp: "2024-12-08T10:05:00Z",
    upvotes: 30,
    downvotes: 4,
    replies: [
      {
        id: 7,
        user: {
          username: "User7",
          avatar: "user7_avatar_url",
        },
        text: "Replying to the second top-level comment.",
        timestamp: "2024-12-08T10:25:00Z",
        upvotes: 12,
        downvotes: 1,
        replies: [
          {
            id: 8,
            user: {
              username: "User8",
              avatar: "user8_avatar_url",
            },
            text: "Nested reply to User7.",
            timestamp: "2024-12-08T10:35:00Z",
            upvotes: 8,
            downvotes: 0,
            replies: [
              {
                id: 12,
                user: {
                  username: "User12",
                  avatar: "user12_avatar_url",
                },
                text: "Even deeper reply to User8.",
                timestamp: "2024-12-08T11:00:00Z",
                upvotes: 9,
                downvotes: 1,
                replies: [
                  {
                    id: 13,
                    user: {
                      username: "User13",
                      avatar: "user13_avatar_url",
                    },
                    text: "This thread is getting intense!",
                    timestamp: "2024-12-08T11:10:00Z",
                    upvotes: 3,
                    downvotes: 0,
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 14,
    user: {
      username: "User14",
      avatar: "user14_avatar_url",
    },
    text: "Third top-level comment to keep things going!",
    timestamp: "2024-12-08T10:45:00Z",
    upvotes: 25,
    downvotes: 2,
    replies: [
      {
        id: 15,
        user: {
          username: "User15",
          avatar: "user15_avatar_url",
        },
        text: "A reply to the third top-level comment.",
        timestamp: "2024-12-08T10:50:00Z",
        upvotes: 14,
        downvotes: 1,
        replies: [],
      },
    ],
  },
];
