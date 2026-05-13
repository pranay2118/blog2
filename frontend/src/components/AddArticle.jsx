import { useForm } from "react-hook-form";
import { formCard, formTitle, formGroup, labelClass, inputClass, submitBtn, errorClass } from "../styles/common";

function AddArticle() {

  const { register, handleSubmit, formState: { errors }} = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="py-20 bg-slate-50 min-h-[calc(100vh-80px)]">

      <div className={formCard}>

        <h2 className={formTitle}>
          Add Article
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Title */}
          <div className={formGroup}>
            <label className={labelClass}>Title</label>
            <input
              type="text"
              placeholder="Title"
              className={inputClass}
              {...register("title", { required: "Title is required" })}
            />

            {errors.title && (
              <p className={errorClass}>
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Category */}
          <div className={formGroup}>
            <label className={labelClass}>Category</label>
            <select
              className={inputClass}
              {...register("category", { required: "Category required" })}
            >
              <option value="">Select Category</option>
              <option value="Technology">Technology</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Sports">Sports</option>
            </select>

            {errors.category && (
              <p className={errorClass}>
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Content */}
          <div className={formGroup}>
            <label className={labelClass}>Content</label>
            <textarea
              rows="6"
              placeholder="Content"
              className={inputClass}
              {...register("content", { required: "Content required" })}
            ></textarea>

            {errors.content && (
              <p className={errorClass}>
                {errors.content.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className={submitBtn}
          >
            Publish Article
          </button>

        </form>
      </div>

    </div>
  );
}

export default AddArticle;