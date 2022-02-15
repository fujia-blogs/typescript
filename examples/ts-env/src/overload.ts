type MessageType = 'image' | 'audio' | 'video' | string;

type Message = {
  id: number;
  type: MessageType;
  message: string;
};

const messages: Message[] = [
  {
    id: 1,
    type: 'image',
    message: "I figure lift is a gift and I don't intent on wasting it",
  },
  {
    id: 2,
    type: 'audio',
    message: "I figure lift is a gift and I don't intent on wasting it",
  },
  {
    id: 3,
    type: 'video',
    message: "I figure lift is a gift and I don't intent on wasting it",
  },
  {
    id: 4,
    type: 'image',
    message: "I figure lift is a gift and I don't intent on wasting it",
  },
  {
    id: 5,
    type: 'image',
    message: "I figure lift is a gift and I don't intent on wasting it",
  },
];

function getMsgWX(id: number): Message;
function getMsgWX(msgType: MessageType, counter: number): Message[];
function getMsgWX(
  payload: any,
  counter?: number
): Message | Message[] | undefined {
  if (typeof payload === 'number') {
    return messages.find((msg) => msg.id === payload);
  } else {
    return messages.filter((msg) => msg.type === payload).slice(0, counter);
  }
}

console.log(getMsgWX(2));
// console.log(getMsgWX('2'));
