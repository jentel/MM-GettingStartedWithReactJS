export default function updateBucketCount(updatedBucketCount){
    return{
        type: "UPDATE_BUCKET_INPUT",
        payload:updatedBucketCount
    }
}