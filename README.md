# Website

This repo contains the source code for the [https://www.hmcardle.com](https://www.hmcardle.com) website.

## Architecture

The overall architecture of this setup is far too complex for a simple static website, however it serves as a good testing grounds for all things cloud and kubernetes. There are two separate environments for this.

### Frontend

**Development**

The architecture of this stage involves a backend Kubernetes cluster hosting a React App, fronted by an Ingress. The ingress itself is an `ingress-nginx` controller, fronted by a service exposed on a `NodePort` on multiple nodes fronted by a GCP Application Load balancer.

**Production**

This stage is ran purely as a serverless website on a GCP Cloud Storage bucket. This provides the benefit of being almost completely free to run, and is also highly available and scalable. The bucket is fronted by a GCP Load Balancer to perform HTTPS, something GCP integrates with natively and can't be said for AWS S3.

### Backend

In this case, the backend is just fetching blog posts.

The backend for both phases is Cloud Run. Development invokes the Cloud Run Function directly, while the bucket takes a little more complicated, but common approach. The bucket invokes a pubicly available API, which in tern invokes the Cloud Run Function.

The Cloud Run Function proceeds to read blogs from GCP Datastore, a simpler version of Firestore that is just a serverless NoSQL database. Stored in the Datastore is the blog posts in the form of a JSON object with the following schema:

```json
{
  "title": "string", // The title of the blog post
  "description": "string", // A short description of the blog post
  "date": "string", // The date the blog post was published
  "content": "string", // A link to an object in GCP Storage containing the blog post content
}
```

The reason for storing content in GCP storage is to avoid limits set by Datastore and also provide a way to store images and other media if necessary. Linking content this way is more troublesome to setup, but decouples the content from the database, allowing for more flexibility in the future.

But...why all this for a static website?

The best way to hone your skills and not use what you've learned is to use it, consistently. Just because we aren't running a large company with our infrastructure does not mean we cannot use it to our full advantage. 

