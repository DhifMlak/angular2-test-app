import { Ticket  } from '../ticket';

// Check if element is visible
export function isVisible(e) {
  return !!( e.offsetWidth || e.offsetHeight || e.getClientRects().length );
}

// Just approve test
export function pass(){
  expect(true).toBe(true);
}

// Gets lastt segment of url
export function getLastSegment(url){
  let parts = url.split('/');
  return parts.pop() || parts.pop();
}

// Example Ticket
export let ticketStub: Ticket = {
      "id": 1,
      "title": "Example Title",
      "description": "Example Description.",
      "created_at": "2017-02-15T17:03:29.386Z",
      "updated_at": "2017-02-15T17:03:29.386Z",
      "category": "Category A"
    };
