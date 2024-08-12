"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { diseaseDetails } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const DiagnosePage = () => {
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [result, setResult] = useState({
    disease: null,
    description: null,
    cause: null,
    precaution: null,
    medicine: null,
  });
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    // Display image preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewImage(e.target.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  const handlePredict = async () => {
    if (!image) {
      toast.info("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setResult({
          disease: data.result,
          description: diseaseDetails[data.result].description,
          cause: diseaseDetails[data.result].cause,
          precaution: diseaseDetails[data.result].precaution,
          medicine: diseaseDetails[data.result].medicine,
        });
      } else {
        alert("Prediction failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPreviewImage(null);
    setResult(null);
  }, [image]);

  return (
    <div className="flex flex-col min-h-screen p-2 gap-2 bg-[url('https://cdn.pixabay.com/photo/2022/04/28/04/12/sun-7161716_1280.jpg')] bg-cover">
      <Card className="bg-transparent border-none">
        <CardHeader className="text-center">
          <CardTitle className="">Upload Plant Leaf Image</CardTitle>
          <CardDescription className="text-black">
            AI Driven Crop Health Advisor with intelligent Disease Diagnosis &
            Solutions
          </CardDescription>
        </CardHeader>
        <CardContent>
          {previewImage && (
            <div className="mb-2 flex justify-center">
              <Image
                src={previewImage}
                alt="Preview"
                width={300}
                height={300}
                className="rounded-md"
              />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <div>
              <Input
                type="file"
                id="fileInput"
                className="custom-file-input hidden"
                onChange={handleFileChange}
              />
              <Label
                htmlFor="fileInput"
                className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer"
              >
                Choose Plant Image File
              </Label>
            </div>
            <Button
              disabled={loading}
              onClick={handlePredict}
              className="predict-btn"
            >
              Predict
            </Button>
          </div>
        </CardContent>
      </Card>

      {loading && (
        <div className="grid grid-cols-2 gap-2">
          <Skeleton className={"h-24 w-full"} />
          <Skeleton className={"h-24 w-full"} />
          <Skeleton className={"h-24 w-full"} />
          <Skeleton className={"h-24 w-full"} />
          <Skeleton className={"h-24 w-full"} />
        </div>
      )}
      {result ? (
        <div className="grid grid-cols-2 gap-2">
          <Card>
            <CardHeader>
              <CardTitle>Disease</CardTitle>
              <CardDescription className="text-black text-base font-semibold">
                {result.disease}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>

              <CardDescription className="text-black text-base font-semibold">
                {result.description}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cause</CardTitle>

              <CardDescription className="text-black text-base font-semibold">
                {result.cause}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Precaution</CardTitle>

              <CardDescription className="text-black text-base font-semibold">
                {result.precaution}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Medicine</CardTitle>

              <CardDescription className="text-black text-base font-semibold">
                {result.medicine}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      ) : null}
    </div>
  );
};

export default DiagnosePage;
