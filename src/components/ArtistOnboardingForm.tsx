'use client';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { onboardingSchema, OnboardingSchema } from '@/lib/validation';
import { useState } from 'react';
import { toast } from 'sonner'; // ✅ Use sonner's toast

const categories = ['Singer', 'Dancer', 'DJ', 'Speaker'];
const languages = ['English', 'Spanish', 'Hindi', 'French'];

export default function ArtistOnboardingForm() {
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<OnboardingSchema>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      name: '',
      bio: '',
      location: '',
      category: [],
      languages: [],
      fee: '',
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      form.setValue('image', file);
    }
  };

   const onSubmit = (data: OnboardingSchema) => {
  console.log('🎤 Artist Data:', data);

  toast('Artist profile submitted!', {
    description: 'Thank you for your submission.',
    action: {
      label: 'Undo',
      onClick: () => {
        console.log('Undo submission');
        // You can add undo logic here if needed
      },
    },
  });

  form.reset();
  setPreview(null);
};
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl><Input placeholder="Artist Name" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bio */}
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl><Textarea rows={3} placeholder="Tell us about yourself" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Location */}
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl><Input placeholder="City, State" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Category */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <FormControl key={cat}>
                    <label className="flex items-center gap-2">
                      <Checkbox
                        checked={field.value.includes(cat)}
                        onCheckedChange={(checked) => {
                          const val = checked
                            ? [...field.value, cat]
                            : field.value.filter((c) => c !== cat);
                          field.onChange(val);
                        }}
                      />
                      {cat}
                    </label>
                  </FormControl>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Languages */}
        <FormField
          control={form.control}
          name="languages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Languages</FormLabel>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <FormControl key={lang}>
                    <label className="flex items-center gap-2">
                      <Checkbox
                        checked={field.value.includes(lang)}
                        onCheckedChange={(checked) => {
                          const val = checked
                            ? [...field.value, lang]
                            : field.value.filter((l) => l !== lang);
                          field.onChange(val);
                        }}
                      />
                      {lang}
                    </label>
                  </FormControl>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Fee */}
        <FormField
          control={form.control}
          name="fee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fee Range</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select fee range" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="500-1000">$500 - $1000</SelectItem>
                  <SelectItem value="1000-1500">$1000 - $1500</SelectItem>
                  <SelectItem value="1500-2000">$1500 - $2000</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Image Upload */}
        <div>
          <FormLabel>Profile Image (Optional)</FormLabel>
          <Input type="file" accept="image/*" onChange={handleImageChange} />
          {preview && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={preview}
              alt="Preview"
              className="mt-3 h-32 w-32 object-cover rounded border"
            />
          )}
        </div>

        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  );
}
