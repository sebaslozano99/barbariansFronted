import CheckboxItem from "./CheckboxItem";

export default function CheckboxContainer() {
  return (
    <div className="flex items-center justify-between gap-4 px-2 w-auto" >
      <h2 >Services</h2>

      <div className="flex items-center flex-wrap gap-3 w-[90%]" >
        <CheckboxItem value="classic-haircut" >Classic Haircut</CheckboxItem>
        <CheckboxItem value="fade-haircut" >Fade Haircut</CheckboxItem>
        <CheckboxItem value="buzz-cut" >Buzz Cut</CheckboxItem>
        <CheckboxItem value="razor-cut" >Razor Cut</CheckboxItem>
        <CheckboxItem value="textured-cut" >Textured Cut</CheckboxItem>
        <CheckboxItem value="caesar-cut" >Caesar Cut</CheckboxItem>
        <CheckboxItem value="undercut" >Undercut</CheckboxItem>
        <CheckboxItem value="beard-trim" >Beard Trim</CheckboxItem>
        <CheckboxItem value="beard-shaping" >Beard Shaping</CheckboxItem>
        <CheckboxItem value="hot-towels-shave" >Hot Towels Shave</CheckboxItem>
        <CheckboxItem value="beard-coloring" >Beard Coloring</CheckboxItem>
        <CheckboxItem value="hair-repair-treatment" >Hair Repair Treatment</CheckboxItem>
        <CheckboxItem value="nose-ear-trimming" >Nose and Ear Trimming</CheckboxItem>
        <CheckboxItem value="beard-shaping" >Mobile Service</CheckboxItem>

      </div>

    </div>
  )
}
