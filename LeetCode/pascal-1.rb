def generate(num_rows)
    pascal = [[1]]
    row = 0
    while row < num_rows
        template = pascal[row].unshift(0).push(0)
        result = []
        template.length.times do |i|
           result << template[i]+template[i+1]
        end
        pascal << result
        row += 1
    end
    pascal
end

