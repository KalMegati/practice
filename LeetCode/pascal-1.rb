# require 'pry'

def generate(num_rows)
    pascal = [[1]]
    row = 0
    # puts pascal
    while row < num_rows-1
        # puts "ROW #{row}"
        template = pascal[row].map {|a|a}
        template.unshift(0).push(0)
        result = []
        # puts template
        (template.length-1).times do |i|
           
           result << template[i]+template[i+1]
        end
        pascal << result
        row += 1
    end
    pascal
end

print(generate(3))