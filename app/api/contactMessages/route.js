import { NextResponse } from 'next/server';
import clientPromise from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

const dbName = 'iqra';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection('contactMessages');
    const messages = await collection.find().sort({ createdAt: -1 }).toArray();

    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.log('Error fetching messages:', error);
    return NextResponse.json({ message: 'Failed to fetch messages' }, { status: 500 });
  }
}

/* import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import { ObjectId } from 'mongodb'; */


export async function PATCH(request) {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection('contactMessages');

    const { id, action } = await request.json(); // Parse request body for ID and action
    if (!id || !action) {
      return NextResponse.json(
        { message: 'ID and action are required' },
        { status: 400 }
      );
    }

    let update;
    if (action === 'confirm') {
      update = { confirmed: true, cancelled: false };
    } else if (action === 'cancel') {
      update = { confirmed: false, cancelled: true };
    } else {
      return NextResponse.json({ message: 'Invalid action' }, { status: 400 });
    }

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: update }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ message: 'No message found to update' }, { status: 404 });
    }

    return NextResponse.json(
      { message: `Booking ${action === 'confirm' ? 'confirmed' : 'cancelled'} successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.log('Error updating booking status:', error);
    return NextResponse.json({ message: 'Failed to update booking status' }, { status: 500 });
  }
}

// DELETE endpoint to remove a contact message
export async function DELETE(request) {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection('contactMessages');

    const { id } = await request.json(); // Get the ID from the request body
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: 'No message found to delete' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Message deleted successfully' }, { status: 200 });
  } catch (error) {
    console.log('Error deleting message:', error);
    return NextResponse.json({ message: 'Failed to delete message' }, { status: 500 });
  }
}